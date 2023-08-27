import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AppService from "../../../services/appServices";
const token = "";

const FeaturedMedia = ({ propsData }) => {
  const [getFeaturedMedia, setFeaturedMedia] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMediaById = AppService.getMediaById(propsData.featuredMedia && propsData.featuredMedia);
    ReUse.getApiData(getMediaById, setFeaturedMedia, setLoading);

}, []);


  return (
    <Link  href={`posts/${propsData && propsData.postId}`} legacyBehavior>
    <a
      class="h-entry mb-30 v-height gradient"
      style={{
        backgroundImage: `url(${
          getFeaturedMedia &&
          getFeaturedMedia.guid &&
          getFeaturedMedia.guid.rendered
        })`,
      }}
    >
      <div class="text">
        <h2>{propsData && propsData.featuredTitle}</h2>
        <span class="date">{propsData && propsData.featuredDate}</span>
      </div>
    </a>

    </Link>
  );
};

export default FeaturedMedia;
