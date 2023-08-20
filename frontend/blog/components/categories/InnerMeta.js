import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";


const InnerMeta = ({ propsData }) => {
  const [getInnerMeta, setInnerMeta] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BACKEND_API}media/${
          propsData.mediaId && propsData.mediaId
        }`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
      .then((result) => setInnerMeta(result.data))
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
        href={`postsbycategory/${propsData && propsData.catId}`}
        legacyBehavior
      >
        <a
          class="hentry v-height img-2 ml-auto gradient"
          style={{
            backgroundImage: `url(${
              getInnerMeta ? 
              getInnerMeta && getInnerMeta.guid && getInnerMeta.guid.rendered
                : "https://picsum.photos/1280/720"
            })`,
            margin: "10px",
          }}
        >
          <span class="post-category text-white bg-warning">
            {" "}
            {propsData && propsData.count}
          </span>
          <div class="text text-sm">
            <h2>{propsData && propsData.name}</h2>
            <span>{propsData && propsData.description}</span>
          </div>
        </a>
      </Link>
    </>
  );
};

export default InnerMeta;
