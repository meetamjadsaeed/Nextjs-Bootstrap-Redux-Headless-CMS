import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import MainMeta from "./MainMeta";
import SideMeta from "./SideMeta";
import InnerMeta from "./InnerMeta";
import { Spin } from 'antd';
import AppService from "../../services/appServices";

const Categories = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const [getMainCategories, setMainCategories] = useState([]);
  const [getSideCategories, setSideCategories] = useState([]);
  const [getInnerCategories, setInnerCategories] = useState([]);




  useEffect(() => {
    const allMainCategories = AppService.getAllCategoriesWithPage(1);
    ReUse.getApiData(allMainCategories, setMainCategories, setLoading);

    const allSideCategories = AppService.getAllCategoriesWithPage(4);
    ReUse.getApiData(allSideCategories, setSideCategories, setLoading2);

    const innerCategories = AppService.getAllCategoriesWithPage(3);
    ReUse.getApiData(innerCategories, setInnerCategories, setLoading3);

  }, []);

  return (
    <>
      <div class="site-section bg-light">
        <div class="container">
          <div class="row align-items-stretch retro-layout">
            {getSideCategories ? (
              getSideCategories?.slice(3)?.map((item) => {
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
                  getInnerCategories?.slice(1)?.map((item) => {
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
