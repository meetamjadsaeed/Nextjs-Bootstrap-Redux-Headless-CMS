import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import PopularPostMeta from "./popular/PopularPostMeta";
import { Spin } from 'antd';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const Popular = ({ popularData }) => {
  const [getPopularPosts, setPopularPosts] = useState();

  const getData = async () => {
    // Get Post Details
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekblog?orderby=comment_count&per_page=5`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setPopularPosts(result.data))
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
          // console.log(error.request);
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
      {/* <!-- END sidebar-box --> */}
      <div class="sidebar-box">
        <h3 class="heading">Popular Posts</h3>
        <div class="post-entry-sidebar">
          <ul>
            {getPopularPosts ? (
              getPopularPosts.map((item) => {
                return (

                  <PopularPostMeta
                    propsData={{
                      postId: item.id,
                      featuredMedia: item.featured_media,
                      postTitle: item["title"]["rendered"],
                      postDate: item.date,
                    }}
                  />


                );
              })
            ) : (
             <Spin/>
            )}
          </ul>
        </div>
      </div>
      {/* <!-- END sidebar-box --> */}
    </>
  );
};

export default Popular;
