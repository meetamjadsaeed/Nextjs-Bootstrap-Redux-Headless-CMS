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
    <Link href={`/posts/${propsData.postId && propsData.postId}`} legacyBehavior>
    <a>
      <img
        src={
          getFeaturedMedia ? getFeaturedMedia &&
          getFeaturedMedia.guid &&
          getFeaturedMedia.guid.rendered : "https://picsum.photos/1280/720"
          
        }
        alt="Image"
        class="img-fluid rounded"
      />
    </a>
    </Link>
  );
};

export default FeaturedMedia;
