import React from "react";
import { Spin } from 'antd';

const PostCategories = ({ categoriesData }) => {
  console.log(categoriesData);
  return (
    <>
      <div class="pt-5">
        <p>
          Categories:
          {categoriesData ? (
            categoriesData.map((item) => {
              return <a href="#">{item}, </a>;
            })
          ) : (
            <Spin/>
          )}
          {/* <a href="#">Travel</a>{" "} */}
        </p>
      </div>
    </>
  );
};

export default PostCategories;
