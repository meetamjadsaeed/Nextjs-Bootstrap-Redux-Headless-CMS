import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Related from "../../blog/components/posts/Related";
import Header from "../../blog/layout/header/Header";
import Footer from "../../blog/layout/footer/Footer";
import Newsletter from "../../blog/components/subscribe/Newsletter";
import CommentForm from "../../blog/components/comments/CommentForm";
import CommentList from "../../blog/components/comments/CommentList";
import PostHeader from "../../blog/components/posts/PostHeader";
import PostBody from "../../blog/components/posts/PostBody";
import Popular from "../../blog/components/posts/Popular";
import CategoriesList from "../../blog/components/categories/CategoriesList";
import PostTags from "../../blog/components/tags/PostTags";
import PostAuthor from "../../blog/components/author/PostAuthor";
import PostCategories from "../../blog/components/categories/PostCategories";

// regex for removing the html tags
const regex = /(<([^>]+)>)/gi;

const Posts = () => {
  const [post, setPost] = useState();
  const [imagebyPost, setimagePost] = useState();
  const [getPostAuhtor, setPostAuhtor] = useState();
  const [getPostCats, setPostCats] = useState();
  const [getPostTags, setPostTags] = useState();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

  const router = useRouter();
  const { pid } = router.query;

  const getData = async () => {
    // Get Post Details
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekblog/${pid}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((result) => setPost(result.data))
      // .then((result) => console.log(result.data[0]["title"]["rendered"]))
      // .then((result) => console.log(result.data.title.rendered))
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

    // Get Post thumnbail
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API}seekblog/${pid && pid}`
    );
    // Get Post thumnbail
    const featuredImage = data && data.data && data.data.featured_media;

    // Get Post Author
    const author = data.data.author;

    // Get Post categories
    const categories = data.data.seekcategories[0];

    // Get Post tags
    const tags = data.data.seek_tags[0];

    // Get Post thumnbail
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}media/${featuredImage}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // .then((result) => console.log(result.data))
      .then((result) => setimagePost(result.data))
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

    // Get Post Author
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}users/${author}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // .then((result) => console.log(result.data))
      .then((result) => setPostAuhtor(result.data))
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

    // Get Post Categories
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seekcategories/${tags}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // .then((result) => console.log(result.data))
      .then((result) => setPostCats(result.data))
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

    // Get Post tags
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_API}seek_tags/${categories}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // .then((result) => console.log(result.data))
      .then((result) => setPostTags(result.data))
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
  });

  const postHeader = {
    heroImage: imagebyPost && imagebyPost.source_url,
    title: post && post.title.rendered,
    author: getPostAuhtor && getPostAuhtor.name,
    avatar: getPostAuhtor && getPostAuhtor.avatar_urls["24"] ? getPostAuhtor.avatar_urls["24"] :
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
    date: post && post.date,
  };

  const authorData = {
    authorName: getPostAuhtor && getPostAuhtor.name,
    avatar: getPostAuhtor && getPostAuhtor.avatar_urls["24"] ? getPostAuhtor.avatar_urls["24"] :
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
    bio: getPostAuhtor && getPostAuhtor.description ? getPostAuhtor.description : "user has no bio",
    facebook: getPostAuhtor && getPostAuhtor.acf["facebook"] ? getPostAuhtor.acf["facebook"] : "#",
    twitter: getPostAuhtor && getPostAuhtor.acf["twitter"] ? getPostAuhtor.acf["twitter"] : "#",
    instagram: getPostAuhtor && getPostAuhtor.acf["instagram"] ? getPostAuhtor.acf["instagram"] : "#",
    youtube: getPostAuhtor && getPostAuhtor.acf["youtube"] ? getPostAuhtor.acf["youtube"] : "#",
  };

  const postBody = {
    content: post && post.content.rendered,
  };

  const postCategories = [getPostCats && getPostCats.name];
  // const popularPosts = {

  //   title: "Title",
  //   thumbnail: "Thumbnail",
  //   date: "Date",
  // };

  const categoriesList = [
    {
      name: "Amjad",
      count: 2,
    },
  ];

  const postTags = [getPostTags && getPostTags.name];

  const commentList = {
    postId: post && post.id,
  };

  const commentForm = {
    postId: post && post.id,
  };

  const relatedPosts = {
    postId: post && post.id,
    CategoryId: post && post.seekcategories[0],
  };

  return (
    <>
      <div class="site-wrap">
        <Header />

        <PostHeader headerData={postHeader} />

        <section class="site-section py-lg">
          <div class="container">
            <div class="row blog-entries element-animate">
              <div class="col-md-12 col-lg-8 main-content">
                <PostBody bodyData={postBody} />

                {/* <PostCategories categoriesData={postCategories} /> */}
              </div>

              {/* <!-- END main-content --> */}

              <div class="col-md-12 col-lg-4 sidebar">

                {/* <!-- END sidebar-box --> */}
                <PostAuthor authorData={authorData} />
                <Popular />

                <CategoriesList />

                {/* <PostTags postTagsData={postTags} /> */}
              </div>
              <CommentList commentListData={commentList} />

              {/* <!-- END sidebar --> */}
            </div>
            {/* <CommentForm coomentFormData={commentForm} /> */}
          </div>
        </section>

        <Related relatedPostsData={{
          postId: post && post.id,
          CategoryId: post && post.seekcategories[0],
        }} />

        {/* <Newsletter /> */}
        <Footer />
      </div>
    </>
  );
};

export default Posts;
