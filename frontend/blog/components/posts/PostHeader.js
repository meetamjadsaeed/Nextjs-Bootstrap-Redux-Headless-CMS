import React from 'react'

const PostHeader = ({ headerData }) => {
  // console.log(headerData);
  return (
    <>
      <div
        class="site-cover site-cover-sm same-height overlay single-page"
        style={{
          backgroundImage: `url( ${headerData && headerData.heroImage?
              headerData && headerData.heroImage
              : "https://picsum.photos/1280/720"
            })`
        }}
      >
        <div class="container">
          <div class="row same-height justify-content-center">
            <div class="col-md-12 col-lg-10">
              <div class="post-entry text-center">
                {/* <span class="post-category text-white bg-success mb-3">
                  {headerData && headerData.categories}
                </span> */}
                <h1 class="mb-4">
                  <a href="#">
                    {headerData && headerData.title}
                  </a>
                </h1>
                <div class="post-meta align-items-center text-center">
                  <figure class="author-figure mb-0 mr-3 d-inline-block">
                    <img
                      src={headerData && headerData.avatar}
                      alt="Image"
                      class="img-fluid"
                    />
                  </figure>
                  <span class="d-inline-block mt-1">By {headerData && headerData.author}</span>
                  <span>&nbsp;-&nbsp; {headerData && headerData.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PostHeader