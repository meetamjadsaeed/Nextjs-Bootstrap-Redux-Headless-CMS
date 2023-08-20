import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const RelatedMeta = ({ propsData }) => {
  const [getRelatedMeta, setRelatedMeta] = useState();
  const [getPostCategory, setPostCategory] = useState();


  const getData = async () => {
    // Get Posts
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_API}media/${propsData.mediaId && propsData.mediaId
        }`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setRelatedMeta(result.data))
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

    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories/${propsData.catId && propsData.catId
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
  }, []);

  return (
    <>
      <Link
        href={`${propsData && propsData.postId}`}
        legacyBehavior
      >
        <a
          class="hentry v-height img-2 ml-auto gradient"
          style={{
            backgroundImage: `url(${getRelatedMeta && getRelatedMeta.guid && getRelatedMeta.guid.rendered
                ? getRelatedMeta.guid.rendered
                : "https://st3.depositphotos.com/1000423/13768/i/600/depositphotos_137686900-stock-photo-businesswoman-ride-zebra-mixed-media.jpg"
              })`,
            margin: "10px",
          }}
        >
          {/* <span class="post-category text-white bg-warning">
            {" "}
           { getPostCategory && getPostCategory.name}
          </span> */}
          <div class="text text-sm">
            <h2>{propsData && propsData.postTitle}</h2>
            {/* <span>{propsData && propsData.description}</span> */}
          </div>
        </a>
      </Link>
    </>
  );
};

export default RelatedMeta;
