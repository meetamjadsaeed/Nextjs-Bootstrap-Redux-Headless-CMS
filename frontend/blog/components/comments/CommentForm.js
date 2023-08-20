import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const CommentForm = ({ propsData }) => {
  const [postComment, setPostComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  const commentData = {
    post: propsData.postId && propsData.postId,
    content: postComment.message && postComment.message,
    author_name: postComment.name && postComment.name,
    author_email: postComment.email && postComment.email,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_BACKEND_API}comments`, commentData)
        .then((result) => {

          // console.log(result.data)
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
      <div class="comment-form-wrap pt-5">
        <h3 class="mb-5">
          Leave a comment
        </h3>
        <form action="#" class="p-5 bg-light" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="name">Name *</label>
            <input
              type="text"
              class="form-control"
              id="name"
              onChange={(e) =>
                setPostComment({ ...postComment, name: e.target.value })
              }
            />
          </div>
          <div class="form-group">
            <label for="email">Email *</label>
            <input
              type="email"
              class="form-control"
              id="email"
              onChange={(e) =>
                setPostComment({ ...postComment, email: e.target.value })
              }
            />
          </div>
          {/* <div class="form-group">
            <label for="website">Website</label>
            <input type="url" class="form-control" id="website" />
          </div> */}

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="10"
              class="form-control"
              onChange={(e) =>
                setPostComment({ ...postComment, message: e.target.value })
              }
            ></textarea>
          </div>
          <div class="form-group">
            <input type="submit" value="Post Comment" class="btn btn-primary" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
