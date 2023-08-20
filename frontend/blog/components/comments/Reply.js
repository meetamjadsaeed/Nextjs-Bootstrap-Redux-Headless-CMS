import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Spin } from 'antd';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

// regex for removing the html tags
const regex = /(<([^>]+)>)/gi;

const Reply = ({ propsData }) => {
    const [getReply, setReply] = useState();

    const getData = async () => {
        // Get Post Details
        await axios
            .get(`${process.env.NEXT_PUBLIC_BACKEND_API}comments?parent=${propsData && propsData.commentId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((result) => setReply(result.data))
            // .then((result) => setTotalComments(result.data.length))
            // .then((result) => console.log(result.data[0]["title"]["rendered"]))
            //   .then((result) => console.log(result.data))
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    // console.log(error.response.data);
                    // console.log(error.response.status);
                    // console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    // console.log("Error", error.message);
                }
            });
    };

    useEffect(() => {
        // console.log(pid);
        getData();
    });

    return (
        <>
           {getReply ? (
                    getReply.map((item) => {
                        return (
            <ul className="children">
             

                            <li className="comment">
                                <div className="vcard">
                                    <img
                                        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                                        alt="Image placeholder"
                                    />
                                </div>
                                <div className="comment-body">
                                    <h3>{item.author_name}</h3>
                                    <div className="meta">{item.date}</div>
                                    <p>
                                        {item.content.rendered.replace(regex, "")}
                                    </p>
                                    <p><a href="#" className="reply rounded">Reply</a></p>
                                </div>
                            </li>
                     
            </ul>
               );
                    })
                ) : (
                    <Spin />
                )}
        </>
    )
}

export default Reply