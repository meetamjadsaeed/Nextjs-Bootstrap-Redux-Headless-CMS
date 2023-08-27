import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import InnerMeta from "../categories/InnerMeta";
import RelatedMeta from "./related/RelatedMeta";
import { Spin } from 'antd';
const token = "";

const Related = ({ realtedPostsData }) => {
  const [getRelatedPosts, setRelatedPosts] = useState();

  const getData = async () => {
    // Get Post Details
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekblog?seekcategories=4`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setRelatedPosts(result.data))
      // .then((result) => console.log(result.data[0]["title"]["rendered"]))
      // .then((result) => console.log(result.data))
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log("Error", error.message);
        }
      });
  };

  useEffect(() => {
    // console.log(pid);
    getData();
  }, []);

  return (
    <>
      <div class="site-section bg-light">
        <div class="container">
          <h2>Related Articles</h2>
          <div class="row align-items-stretch retro-layout">
            <div class="col-md-12">
              <div class="two-col">
                {getRelatedPosts ? (
                  getRelatedPosts.map((item) => {
                    return (
                      <RelatedMeta
                        propsData={{
                          catId: item.seekcategories[0],
                          mediaId: item.acf["category_image"],
                          postTitle: item.title.rendered && item.title.rendered,
                          postId: item.id && item.id,
                        }}
                      />
                    );
                  })
                ) : (
                  <Spin/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Related;
