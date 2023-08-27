import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import FeaturedMedia from "./recent/FeaturedMedia";
import RecentPostMeta from "./recent/RecentPostMeta";
import { Spin } from 'antd';



import AppService from "../../services/appServices";
import ReUse from "../../services/helpers/reUse";



const AllPosts = ({ propsData }) => {
  const [getByCategory, setByCategory] = useState([]);
  const [getPagination, setPagination] = useState(10);
  const [loading, setLoading] = useState(false);


  var pagination = () => {
    setPagination(getPagination + 5)
  }


  useEffect(() => {
    const getAllPostsWithCategories = AppService.getAllPostsWithCategories(propsData && propsData.catId);
    ReUse.getApiData(getAllPostsWithCategories, setByCategory, setLoading);
  }, []);

  return (
    <>
      <div className="site-section bg-white">
        <div className="container">
          <div className="row">
            {getByCategory ? (
              getByCategory.map((item) => {
                return (
                  <div className="col-lg-4 mb-4">
                    <div className="entry2">
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
          <div className="row text-center pt-5 border-top">
            <div className="col-md-12">
              <div className="custom-pagination">
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

export default AllPosts;
