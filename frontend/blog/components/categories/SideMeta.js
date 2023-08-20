import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const SideMeta = ({ propsData }) => {
  const [getSideMeta, setSideMeta] = useState();

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
      .then((result) => setSideMeta(result.data))
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
      <Link href={`postsbycategory/${propsData && propsData.catId}`} legacyBehavior>
        <a
          class="hentry img-1 h-100 gradient"
          style={{
            backgroundImage: `url(${
              getSideMeta ? 
              getSideMeta && getSideMeta.guid && getSideMeta.guid.rendered : "https://picsum.photos/1280/720"
              })`,
          }}
        >
          <span class="post-category text-white bg-danger">
            {" "}
            {propsData && propsData.count}
          </span>
          <div class="text">
            <h2>{propsData && propsData.name}</h2>
            <span>{propsData && propsData.description}</span>
          </div>
        </a>
      </Link>
    </>
  );
};

export default SideMeta;