import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AppService from "../../../services/appServices";
import ReUse from "../../../services/helpers/reUse";
const token = "";


const centertFeaturedPostMeta = ({ propsData }) => {
    const [centerFeaturedPostMeta, setCenterFeaturedPostMeta] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMediaById = AppService.getMediaById(propsData.featuredMedia && propsData.featuredMedia);
        ReUse.getApiData(getMediaById, setCenterFeaturedPostMeta, setLoading);

    }, []);

    return (
        <Link href={`posts/${propsData && propsData.postId}`} legacyBehavior>
            <a
                class="h-entry img-5 h-100 gradient"
                style={{
                    backgroundImage: `url(${centerFeaturedPostMeta ?
                        centerFeaturedPostMeta &&
                        centerFeaturedPostMeta.guid &&
                        centerFeaturedPostMeta.guid.rendered : "https://picsum.photos/1280/720"
                        })`,
                }}
            >
                <div class="text">
                    {/* <div class="post-categories mb-3">
                        <span class="post-category bg-danger">Travel</span>
                        <span class="post-category bg-primary">Food</span>
                    </div> */}
                    <h2>{propsData && propsData.featuredTitle}</h2>
                    <span class="date">{propsData && propsData.featuredDate}</span>
                </div>
            </a>



        </Link>
    );
};

export default centertFeaturedPostMeta;
