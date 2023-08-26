import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Spin } from 'antd';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

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