import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import FeaturedMedia from "./recent/FeaturedMedia";
import RecentPostMeta from "./recent/RecentPostMeta";
import { Spin } from 'antd';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const Recent = () => {
  const [RecentPosts, setRecentPosts] = useState();
  const [getPagination, setPagination] = useState(15);

  var pagination = () => {
    setPagination(getPagination + 5)
  }

  const getData = async () => {
    // Get Posts
    await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekblog?per_page=${getPagination}`, {
      // .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekblog`, {
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      })
      .then((result) => setRecentPosts(result.data))
      //   .then((result) => console.log(result.data))
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
  });
  return (
    <>
      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12">
              <h2>Recent Posts</h2>
            </div>
          </div>
          <div class="row">
            {RecentPosts ? (
              RecentPosts.map((item) => {
                return (
                  <div class="col-lg-4 mb-4">
                    <div class="entry2">
                      <FeaturedMedia
                        propsData={{
                          postId: item.id,
                          featuredMedia: item.featured_media,
                        }}
                      />

                      <RecentPostMeta
                        propsData={{
                          postId: item.id,
                          auhtorId: item.author,
                          postTitle: item["title"]["rendered"],
                          postExcerpt: item["excerpt"]["rendered"],
                          postDate: item.date,
                          catIds: item.seekcategories,
                        }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <Spin />
            )}
          </div>
          <div class="row text-center pt-5 border-top">
            <div class="col-md-12">
              <div class="custom-pagination">
                {
                  getPagination > 10 ? <input onClick={pagination} class="btn btn-primary" value="Load More" /> : null
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recent;
