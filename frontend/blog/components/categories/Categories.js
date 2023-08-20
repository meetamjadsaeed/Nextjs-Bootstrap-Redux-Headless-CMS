import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import MainMeta from "./MainMeta";
import SideMeta from "./SideMeta";
import InnerMeta from "./InnerMeta";
import { Spin } from 'antd';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const Categories = () => {
  const [getMainCategories, setMainCategories] = useState();
  const [getSideCategories, setSideCategories] = useState();
  const [getInnerCategories, setInnerCategories] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories?per_page=1`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setMainCategories(result.data))
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

    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories?per_page=4`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setSideCategories(result.data.slice(3)))
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

    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories?per_page=3`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setInnerCategories(result.data.slice(1)))
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


  useEffect(() => {
    const allMainCategories = AppService.getAllCategoriesWithPage(1);
    ReUse.getApiData(allMainCategories, setMainCategories, setLoading);

  }, []);

  return (
    <>
      <div class="site-section bg-light">
        <div class="container">
          <div class="row align-items-stretch retro-layout">
            {getSideCategories ? (
              getSideCategories.map((item) => {
                return (
                  <div class="col-md-5 order-md-2">
                    <SideMeta
                      propsData={{
                        catId: item.id,
                        mediaId: item.acf["category_image"],
                        count: item.count,
                        name: item.name,
                        description: item.description,
                      }}
                    />
                  </div>
                );
              })
            ) : (
              <Spin />
            )}

            <div class="col-md-7">
              {getMainCategories ? (
                getMainCategories.map((item) => {
                  return (
                    <MainMeta
                      propsData={{
                        catId: item.id,
                        mediaId: item.acf["category_image"],
                        count: item.count,
                        name: item.name,
                        description: item.description,
                      }}
                    />
                  );
                })
              ) : (
                <Spin />
              )}

              <div class="two-col d-block d-md-flex">
                {getInnerCategories ? (
                  getInnerCategories.map((item) => {
                    return (
                      <InnerMeta
                        propsData={{
                          catId: item.id,
                          mediaId: item.acf["category_image"],
                          count: item.count,
                          name: item.name,
                          description: item.description,
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
          <Link href={"/allcategories"}>
            <input style={{ margin: "5% 0 5% 1%" }} class="btn btn-primary" value="Browser All" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Categories;
