import React from 'react'
import Link from 'next/link'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spin } from 'antd';




const FooterNav = () => {
  const [Categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [getItems, setItems] = useState();

  const getData = async () => {
    // Get Posts
    await axios
      .get(`https://backend.seekwordpress.com/wp-json/menus/v1/menus/footer`)
      .then((result) => {
        setItems(result.data.items);
        setLoading(false);
      })
      //   .then((result) => console.log(result.data))
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          setLoading(false);
        } else if (error.request) {
          // The request was made but no response was received
          // console.log(error.request);
          setLoading(false);
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log("Error", error.message);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ul class="list-unstyled float-left mr-5">
        
        {
        loading ? <Spin/> : 
        getItems ? (
          getItems.map((item) => {
            return (
              <li>
                <Link href={item.url} legacyBehavior>
                  <a>{item.title ? item.title : ""}</a>
                </Link>
              </li>
            );
          })
        ) : (
          <Spin/>
        )}

      </ul>
    </>
  )
}

export default FooterNav