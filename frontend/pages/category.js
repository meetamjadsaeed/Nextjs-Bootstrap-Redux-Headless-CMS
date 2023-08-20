import React from "react";
import Related from "../blog/components/posts/Related";
import Header from "../blog/layout/header/Header";
import Footer from "../blog/layout/footer/Footer";
import Main from "../blog/layout/main/Main";
import Recent from "../blog/components/posts/Recent";
import Categories from "../blog/components/categories/Categories";
import Newsletter from "../blog/components/subscribe/Newsletter";
import CommentForm from "../blog/components/comments/CommentForm";
import CommentList from "../blog/components/comments/CommentList";
import PostHeader from "../blog/components/posts/PostHeader";
import PostBody from "../blog/components/posts/PostBody";
import Popular from "../blog/components/posts/Popular";
import CategoriesList from "../blog/components/categories/CategoriesList";
import PostTags from "../blog/components/tags/PostTags";
import PostAuthor from "../blog/components/author/PostAuthor";
import PostCategories from "../blog/components/categories/PostCategories";
import AllPosts from "../blog/components/posts/AllPosts";
import CategoryHeader from "../blog/components/categories/CategoryHeader";

const category = () => {
  return (
    <>
      <div className="site-wrap">
        <Header />

       <CategoryHeader/>

        <AllPosts />

        <Footer />
      </div>
    </>
  );
};

export default category;
