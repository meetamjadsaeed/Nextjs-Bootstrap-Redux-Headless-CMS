import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Spin } from 'antd';
import AppService from '../../services/appServices';

const token = "";

// regex for removing the html tags
const regex = /(<([^>]+)>)/gi;

const Reply = ({ propsData }) => {
    const [getReply, setReply] = useState();
    const [loading, setLoading] = useState(false);



    const router = useRouter();
    const { pid } = router.query;

    useEffect(() => {
        const getCommentsRepliesByCommentId = AppService.getCommentsRepliesByCommentId(propsData && propsData.commentId);
        ReUse.getApiData(getCommentsRepliesByCommentId, setReply, setLoading);

    }, []);


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