import React from "react";
import CommentForm from "./CommentForm";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Spin } from 'antd';
import Reply from "./Reply";
import AppService from "../../services/appServices";

const token = "";

// regex for removing the html tags
const regex = /(<([^>]+)>)/gi;

const CommentList = ({ commentListData }) => {
  const [getComments, setComments] = useState();
  const [loading, setLoading] = useState(false);



  const router = useRouter();
  const { pid } = router.query;

  useEffect(() => {
    const getCommentsListByPostId = AppService.getCommentsListByPostId(pid, getPagination);
    ReUse.getApiData(getCommentsListByPostId, setComments, setLoading);

  }, []);

  return (
    <>
      <div className="pt-5">
        <h3 className="mb-5">Comments on this Post</h3>
        <ul className="comment-list">
          {getComments ? (
            getComments.map((item) => {
              return (

                <li className="comment">
                  <div className="vcard">
                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Image placeholder" />
                  </div>
                  <div className="comment-body">
                    <h3>{item.author_name}</h3>
                    <div className="meta">{item.date}</div>
                    <p>{item.content.rendered.replace(regex, "")}</p>
                    <p>
                      <a href="#" className="reply rounded">
                        Reply
                      </a>
                    </p>
                  </div>


                  <Reply
                    propsData={
                      {
                        commentId: item.id,
                        parentId: item.parent,
                      }
                    }
                  />

                </li>
              );
            })
          ) : (
            <Spin />
          )}

        </ul>



        {/* <!-- END comment-list --> */}

        <CommentForm
          propsData={{
            postId: pid,
          }}
        />
      </div>
    </>
  );
};

export default CommentList;
