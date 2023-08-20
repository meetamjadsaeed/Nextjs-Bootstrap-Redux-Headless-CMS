import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from 'next/link';
import { Spin } from 'antd';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const CategoriesList = () => {
  const [getAllCategories, setAllCategories] = useState();
  const getData = async () => {
    // Get Post Details
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setAllCategories(result.data))
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
  }

  useEffect(() => {
    // console.log(pid);
    getData();
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