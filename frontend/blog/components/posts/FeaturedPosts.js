import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import FeaturedMedia from "./featured/FeaturedMedia";
import FeaturedPostMeta from "./featured/FeaturedPostMeta";
import CenterFeaturedPostMeta from "./featured/CenterFeaturedPostMeta";
import { Spin } from 'antd';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const FeaturedPosts = () => {
  const [FeaturedPosts, setFeaturedPosts] = useState();
  const [centerFeaturedPosts, setCenterFeaturedPosts] = useState();
  const [rightFeaturedPosts, setRightFeaturedPosts] = useState();


  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const getData = async () => {
    // Get Posts
    await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekblog?per_page=2`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => setFeaturedPosts(result.data))
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

    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekblog?per_page=3`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => setCenterFeaturedPosts(result.data.slice(2)))
      // .then((result) => console.log(result.data.slice(2)))
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });

    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekblog?per_page=5`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((result) => setRightFeaturedPosts(result.data.slice(3)))
      // .then((result) => console.log(result.data.slice(2)))
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="site-section bg-light">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12">
              <h2>Featured Posts</h2>
            </div>
          </div>
          <div class="row align-items-stretch retro-layout-2">
            <div class="col-md-4">
              {FeaturedPosts ? (
                FeaturedPosts.map((item) => {
                  return (
                    <FeaturedPostMeta
                      propsData={{
                        postId: item.id,
                        featuredMedia: item.featured_media,
                        featuredTitle: item["title"]["rendered"],
                        featuredDate: item.modified,
                      }}
                    />
                  );
                })
              ) : (
                <Spin />
              )}



            </div>
            <div class="col-md-4">
              {centerFeaturedPosts ? (
                centerFeaturedPosts.map((item) => {
                  return (
                    <CenterFeaturedPostMeta
                      propsData={{
                        postId: item.id,
                        featuredMedia: item.featured_media,
                        featuredTitle: item["title"]["rendered"],
                        featuredDate: item.modified,
                      }}
                    />
                  );
                })
              ) : (
                <Spin />
              )}


            </div>
            <div class="col-md-4">
              {rightFeaturedPosts ? (
                rightFeaturedPosts.map((item) => {
                  return (


                    <FeaturedPostMeta
                      propsData={{
                        postId: item.id,
                        featuredMedia: item.featured_media,
                        featuredTitle: item["title"]["rendered"],
                        featuredDate: item.modified,
                      }}
                    />

                  );
                })
              ) : (
                <Spin />
              )}


            </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default FeaturedPosts;
