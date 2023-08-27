import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Spin } from 'antd';
import AppService from '../../services/appServices';
import ReUse from '../../services/helpers/reUse';
const token = "";

const CategoriesList = () => {
  const [getAllCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getAllCategories = AppService.getAllCategories();
    ReUse.getApiData(getAllCategories, setAllCategories, setLoading);

  }, []);

  return (
    <>
      <div class="sidebar-box">
        <h3 class="heading">Categories</h3>
        <ul class="categories">
          {getAllCategories ? (
            getAllCategories.map((item) => {
              return <li>
                <Link href={`/postsbycategory/${item.id}`} legacyBehavior>
                  <a >
                    {item.name} <span>({item.count})</span>
                  </a>
                </Link>
              </li>

            })
          ) : (
            <Spin />
          )}

        </ul>
      </div>

    </>
  )
}

export default CategoriesList