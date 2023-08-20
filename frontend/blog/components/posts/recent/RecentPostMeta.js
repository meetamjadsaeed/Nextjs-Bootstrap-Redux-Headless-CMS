import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const recentPostMeta = ({ propsData }) => {
  const [getRecentPostMeta, setRecentPostMeta] = useState();
  const [getPostCategory, setPostCategory] = useState();

  const getData = async () => {
    // Get Post User
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_API}users/${propsData.auhtorId && propsData.auhtorId
        }`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setRecentPostMeta(result.data))
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

    // Get Post Category
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories/${propsData.catIds && propsData.catIds[0]
        }`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setPostCategory(result.data))
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
    console.log(propsData.catIds && propsData.catIds[0]);
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
