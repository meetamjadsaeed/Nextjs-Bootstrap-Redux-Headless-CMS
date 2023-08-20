import React from "react";

const PostBody = ({ bodyData }) => {
  return (
    <>
      <div class="post-content-body">
        <p dangerouslySetInnerHTML={{ __html: bodyData.content }}></p>
      </div>
    </>
  );
};

export default PostBody;
