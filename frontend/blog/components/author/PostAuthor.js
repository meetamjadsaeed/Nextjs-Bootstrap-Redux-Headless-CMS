import React from 'react'

const PostAuthor = ({authorData}) => {
  return (
    <>
    <div class="sidebar-box">
                  <div class="bio text-center">
                    <img
                      src={authorData && authorData.avatar}
                      alt="Image Placeholder"
                      class="img-fluid mb-5"
                    />
                    <div class="bio-body">
                      <h2>{authorData && authorData.authorName}</h2>
                      <p class="mb-4">
                      {authorData && authorData.bio}
                      </p>
                      <p>
                        <a
                          href="https://www.linkedin.com/in/meetamjadsaeed/"
                          class="btn btn-primary btn-sm rounded px-4 py-2"
                          target="_blank"
                        >
                          Check Profile
                        </a>
                      </p>
                      <p class="social">
                        <a href={authorData && authorData.facebook} class="p-2">
                          <span class="fa fa-facebook"></span>
                        </a>
                        <a href={authorData && authorData.twitter} class="p-2">
                          <span class="fa fa-twitter"></span>
                        </a>
                        <a href={authorData && authorData.instagram} class="p-2">
                          <span class="fa fa-instagram"></span>
                        </a>
                        <a href={authorData && authorData.youtube} class="p-2">
                          <span class="fa fa-youtube-play"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default PostAuthor