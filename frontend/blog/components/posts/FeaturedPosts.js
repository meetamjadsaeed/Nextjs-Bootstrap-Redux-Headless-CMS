import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import FeaturedMedia from "./featured/FeaturedMedia";
import FeaturedPostMeta from "./featured/FeaturedPostMeta";
import CenterFeaturedPostMeta from "./featured/CenterFeaturedPostMeta";
import { Spin } from 'antd';
import AppService from "../../services/appServices";

const token = "";

const FeaturedPosts = () => {
  const [FeaturedPosts, setFeaturedPosts] = useState();
  const [centerFeaturedPosts, setCenterFeaturedPosts] = useState();
  const [rightFeaturedPosts, setRightFeaturedPosts] = useState();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);





  useEffect(() => {

    const getAllPosts = AppService.getAllPosts(2);
    ReUse.getApiData(getAllPosts, setFeaturedPosts, setLoading);

    const getAllPosts2 = AppService.getAllPosts(3);
    ReUse.getApiData(getAllPosts2, setCenterFeaturedPosts, setLoading2);

    const getAllPosts3 = AppService.getAllPosts(5);
    ReUse.getApiData(getAllPosts3, setRightFeaturedPosts, setLoading3);

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
                FeaturedPosts?.map((item) => {
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
                centerFeaturedPosts.slice(3)?.map((item) => {
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
                rightFeaturedPosts.slice(3)?.map((item) => {
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
