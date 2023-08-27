import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AppService from "../../../services/appServices";
import ReUse from "../../../services/helpers/reUse";

const popularPostMeta = ({ propsData }) => {
    const [getFeaturedMedia, setFeaturedMedia] = useState();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      const getMediaById = AppService.getMediaById(propsData.featuredMedia && propsData.featuredMedia);
      ReUse.getApiData(getMediaById, setFeaturedMedia, setLoading);
  
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
