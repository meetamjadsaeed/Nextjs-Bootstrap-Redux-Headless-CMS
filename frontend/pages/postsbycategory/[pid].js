import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../../blog/layout/header/Header";
import Footer from "../../blog/layout/footer/Footer";
import AllPosts from "../../blog/components/posts/AllPosts";
import CategoryHeader from "../../blog/components/categories/CategoryHeader";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const PostsByCategory = () => {
  
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="site-wrap">
      <Header />

      <CategoryHeader
        propsData={{
          catId: pid && pid,
        }}
      />

      <AllPosts
        propsData={{
          catId: pid && pid,
        }}
      />

      <Footer />
    </div>
  );
};

export default PostsByCategory;
