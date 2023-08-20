import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const CategoryHeader = ({propsData}) => {
  const [getCurrentCategory, setCurrentCategory] = useState();

  const getData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories/${propsData && propsData.catId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setCurrentCategory(result.data))
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
  };

  useEffect(() => {
    // console.log(pid);
    getData();
  }, []);

  return (
    <>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Category</span>
              <h3>{getCurrentCategory ? getCurrentCategory.name : null}</h3>
              <p>
                {getCurrentCategory ? getCurrentCategory.description : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHeader;
