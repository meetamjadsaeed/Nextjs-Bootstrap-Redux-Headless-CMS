import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import AppService from "../../../services/appServices";

const token = "";

const RelatedMeta = ({ propsData }) => {
  const [getRelatedMeta, setRelatedMeta] = useState();
  const [getPostCategory, setPostCategory] = useState();
  const [loading, setLoading] = useState(false);




  useEffect(() => {

    const getCategoryById = AppService.getCategoryById(propsData.catId && propsData.catId);
    ReUse.getApiData(getCategoryById, setPostCategory, setLoading2);

  }, []);

  return (
    <>
      <Link
        href={`${propsData && propsData.postId}`}
        legacyBehavior
      >
        <a
          class="hentry v-height img-2 ml-auto gradient"
          style={{
            backgroundImage: `url(${getRelatedMeta && getRelatedMeta.guid && getRelatedMeta.guid.rendered
              ? getRelatedMeta.guid.rendered
              : "https://st3.depositphotos.com/1000423/13768/i/600/depositphotos_137686900-stock-photo-businesswoman-ride-zebra-mixed-media.jpg"
              })`,
            margin: "10px",
          }}
        >
          {/* <span class="post-category text-white bg-warning">
            {" "}
           { getPostCategory && getPostCategory.name}
          </span> */}
          <div class="text text-sm">
            <h2>{propsData && propsData.postTitle}</h2>
            {/* <span>{propsData && propsData.description}</span> */}
          </div>
        </a>
      </Link>
    </>
  );
};

export default RelatedMeta;
