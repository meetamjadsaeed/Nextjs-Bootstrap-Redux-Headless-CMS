import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AppService from "../../../services/appServices";
const token = "";

const FeaturedPostMeta = ({ propsData }) => {
  const [getFeaturedPostMeta, setFeaturedPostMeta] = useState();  
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getMediaById = AppService.getMediaById(propsData.featuredMedia && propsData.featuredMedia);
    ReUse.getApiData(getMediaById, setFeaturedPostMeta, setLoading);

}, []);


  return (
    <Link href={`posts/${propsData && propsData.postId}`} legacyBehavior>
      <a
        class="h-entry mb-30 v-height gradient"
        style={{
          backgroundImage: `url(${getFeaturedPostMeta ?
            getFeaturedPostMeta &&
            getFeaturedPostMeta.guid &&
            getFeaturedPostMeta.guid.rendered : "https://picsum.photos/1280/720"
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

export default FeaturedPostMeta;
