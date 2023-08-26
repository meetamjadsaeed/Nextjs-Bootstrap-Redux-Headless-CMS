import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJibG9nIiwiaWF0IjoxNjc0Mzk1NTI3LCJleHAiOjE4MzIwNzU1Mjd9.fzB04MWS5fh3IeDe6gaHukRHkahIqwZ52YWUIG7C5oc";

const MainMeta = ({ propsData }) => {
  const [getMainMeta, setMainMeta] = useState();
  const [loading, setLoading] = useState(false);




  useEffect(() => {
    const getMediaById = AppService.getMediaById(propsData && propsData.mediaId);
    ReUse.getApiData(getMediaById, setMainMeta, setLoading);

  }, []);


  return (
    <>
      <Link href={`postsbycategory/${propsData && propsData.catId}`} legacyBehavior>
        <a
          class="hentry img-2 v-height mb30 gradient"
          style={{
            backgroundImage: `url(${getMainMeta ?
                getMainMeta && getMainMeta.guid && getMainMeta.guid.rendered : "https://picsum.photos/1280/720"
              })`,
          }}
        >
          <span class="post-category text-white bg-success">
            {propsData && propsData.count}
          </span>
          <div class="text text-sm">
            <h2>{propsData && propsData.name}</h2>
            <span>{propsData && propsData.description}</span>
          </div>
        </a>
      </Link>
    </>
  );
};

export default MainMeta;
