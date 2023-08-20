import React from 'react'
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../blog/layout/header/Header";
import Footer from "../blog/layout/footer/Footer";
import FeaturedMedia from '../blog/components/posts/recent/FeaturedMedia';
import RecentPostMeta from '../blog/components/posts/recent/RecentPostMeta';
import { useRouter } from 'next/router'
import { Spin } from 'antd';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";


const SearchResults = () => {
  const [getSearch, setSearch] = useState();
  const router = useRouter();
  const { query } = router.query;

  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekblog?search=${query ? query : "a"}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setSearch(result.data))
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
  }, []);

  return (
    <>
      <Header />
      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12">
              <h2>Following Search Matches</h2>
            </div>
          </div>
          <div class="row">
            {getSearch ? (
              getSearch.map((item) => {
                return (
                  <div key={item.id} class="col-lg-4 mb-4">
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

        </div>
      </div>
      <Footer />

    </>
  )
}

export default SearchResults