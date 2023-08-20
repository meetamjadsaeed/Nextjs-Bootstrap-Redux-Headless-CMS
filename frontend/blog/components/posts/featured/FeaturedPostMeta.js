import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const FeaturedPostMeta = ({ propsData }) => {
  const [getFeaturedPostMeta, setFeaturedPostMeta] = useState();
  
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const getData = async () => {

    // Get Posts
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_API}media/${propsData.featuredMedia && propsData.featuredMedia
        }`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      .then((result) => setFeaturedPostMeta(result.data))
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
