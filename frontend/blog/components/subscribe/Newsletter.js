import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const token = "";

const Newsletter = () => {
  const [getEmail, setEmail] = useState({
    email: "",
  });

  const subscribeData = {
    email: getEmail.email && getEmail.email,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_API}subscribe-email`,
          subscribeData, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        .then((result) => {
          // console.log(result.data);
        })
        // .then((result) => setPostComment(result.data))
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
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <div class="site-section bg-lightx">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-5">
              <div class="subscribe-1">
                <h2>Subscribe to our newsletter</h2>
                <p class="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  nesciunt error illum a explicabo, ipsam nostrum.
                </p>
                <form action="#" class="d-flex">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your email address"
                    onChange={(e) =>
                      setEmail({ ...getEmail, email: e.target.value })
                    }
                  />
                  <input
                    type="submit"
                    class="btn btn-primary"
                    value="Subscribe"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
