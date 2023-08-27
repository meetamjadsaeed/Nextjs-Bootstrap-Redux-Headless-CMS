import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Header from "../blog/layout/header/Header";
import Footer from "../blog/layout/footer/Footer";
import InnerMeta from "../blog/components/categories/InnerMeta";
import { Spin } from 'antd';
const token = "";


const AllCategories = () => {
  const [getInnerCategories, setInnerCategories] = useState();

  const getData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setInnerCategories(result.data))
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

      <div class="site-section bg-light">
        <div class="container">
          <div class="row align-items-stretch retro-layout">
            <div class="col-md-12">
              <div class="two-col">
                {getInnerCategories ? (
                  getInnerCategories.map((item) => {
                    return (
                      <InnerMeta
                      key={item.id}
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
                  <Spin/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllCategories;
