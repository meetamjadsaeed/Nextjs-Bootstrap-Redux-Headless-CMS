import React from 'react'
import { Spin } from 'antd';

const PostTags = ({postTagsData}) => {
  return (
    <>
      <div class="sidebar-box">
                  <h3 class="heading">Post Tags</h3>
                  <ul class="tags">
                  {postTagsData ? (
            postTagsData.map((item) => {
              return <li>
                      <a href="#">Travel</a>
                    </li>
                      })
                      ) : (
                       <Spin/>
                      )}
                    {/* <li>
                      <a href="#">Adventure</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Freelancing</a>
                    </li>
                    <li>
                      <a href="#">Travel</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Lifestyle</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Freelancing</a>
                    </li> */}
                  </ul>
                </div>
    </>
  )
}

export default PostTags