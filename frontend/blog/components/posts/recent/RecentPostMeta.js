import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AppService from "../../../services/appServices";
const token = "";

const recentPostMeta = ({ propsData }) => {
  const [getRecentPostMeta, setRecentPostMeta] = useState();
  const [getPostCategory, setPostCategory] = useState();

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);



  useEffect(() => {
    const getUserWithId = AppService.getUserWithId(propsData.auhtorId && propsData.auhtorId);
    ReUse.getApiData(getUserWithId, setRecentPostMeta, setLoading);

    const getCategoryById = AppService.getCategoryById(propsData.catIds && propsData.catIds[0]);
    ReUse.getApiData(getCategoryById, setPostCategory, setLoading2);

  }, []);

  return (
    <>
      <div class="excerpt">
        {/* <span class="post-category text-white bg-secondary mb-3">
          {getPostCategory && getPostCategory.name}
        </span> */}
        <Link href={`/posts/${propsData.postId}`} legacyBehavior>
          <h2 className="post-title">
            <a>{propsData && propsData.postTitle}</a>
          </h2>
        </Link>
        <div class="post-meta align-items-center text-left clearfix">
          <figure class="author-figure mb-0 mr-3 float-left">
            <img
              src={
                getRecentPostMeta
                  ? getRecentPostMeta &&
                  getRecentPostMeta.avatar_urls &&
                  getRecentPostMeta.avatar_urls["24"]
                  : "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
              }
              alt="Image"
              class="img-fluid"
            />
          </figure>
          <span class="d-inline-block mt-1">
            By <a href="#">{getRecentPostMeta && getRecentPostMeta.name}</a>
          </span>

          <span>&nbsp;-&nbsp; {propsData && propsData.postDate}</span>
        </div>

        {/* <p>{propsData && propsData.postExcerpt}</p> */}
        {/* <p dangerouslySetInnerHTML={{ __html: propsData && propsData.postExcerpt }}></p> */}
        <p>
          <Link href={`/posts/${propsData.postId}`} legacyBehavior>
            <a>Read More</a>
          </Link>
        </p>
      </div>
    </>

    // <div>as</div>
  );
};

export default recentPostMeta;
