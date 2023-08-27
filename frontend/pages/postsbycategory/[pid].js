import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Header from "../../blog/layout/header/Header";
import Footer from "../../blog/layout/footer/Footer";
import AllPosts from "../../blog/components/posts/AllPosts";
import CategoryHeader from "../../blog/components/categories/CategoryHeader";
const token = "";

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
