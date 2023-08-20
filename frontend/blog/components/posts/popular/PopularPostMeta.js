import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const popularPostMeta = ({ propsData }) => {
    const [getFeaturedMedia, setFeaturedMedia] = useState();

    const getData = async () => {
        // Get Posts
        await axios
            .get(
                `${process.env.NEXT_PUBLIC_BACKEND_API}media/${propsData.featuredMedia && propsData.featuredMedia
                }`
            )
            .then((result) => setFeaturedMedia(result.data))
            // .then((result) => console.log(result.data))
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
        getData();
    }, []);

    return (
        <>
            <li>
                <a href="">
                    <img
                        src={
                            getFeaturedMedia ? getFeaturedMedia &&
                                getFeaturedMedia.guid &&
                                getFeaturedMedia.guid.rendered : "https://picsum.photos/1280/720"

                        }
                        alt="Image placeholder"
                        class="mr-4"
                    />
                    <div class="text">
                        <h4>{propsData && propsData.postTitle}</h4>
                        <div class="post-meta">
                            <span class="mr-2">{propsData && propsData.postDate}</span>
                        </div>
                    </div>
                </a>
            </li>
        </>

        // <div>as</div>
    );
};

export default popularPostMeta;
