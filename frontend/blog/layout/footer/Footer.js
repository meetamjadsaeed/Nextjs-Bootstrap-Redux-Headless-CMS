import Link from 'next/link'
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import FooterNav from './FooterNav'
const token = "";

const Footer = () => {
  const [Categories, setCategories] = useState();
  const getData = async () => {
    // Get Posts
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories?per_page=4`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setCategories(result.data))
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
      <div class="site-footer">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-4">
              <h3 class="footer-heading mb-4">About Us</h3>
              <p>
              Seek WordPress is a free WordPress resource site for beginners, non-techy and techy users.
              </p>
            </div>
            <div class="col-md-4">
              <div>
                <h3 class="footer-heading mb-4">Browse</h3>
                <FooterNav/>
              </div>
            </div>
            {/* <div class="col-md-4 ml-auto">
              <FooterNav /> */}
            {/* <h3 class="footer-heading mb-4">Navigation</h3>
                <ul class="list-unstyled float-left mr-5">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Subscribes</a>
                  </li>
                </ul> */}
            {/* <ul class="list-unstyled float-left">
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Lifestyle</a>
                  </li>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">Nature</a>
                  </li>
                </ul> */}
            {/* </div> */}
            <div class="col-md-4">
              <div>
                <h3 class="footer-heading mb-4">Connect With Us</h3>
                <ul class="list-unstyled float-left mr-5">
                  <li>
                    <Link href="https://www.facebook.com/seekwordpress/" legacyBehavior>
                      <a>Facebook</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/company/seekwordpress/" legacyBehavior>
                      <a>Linkedin</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center">
              <p></p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer