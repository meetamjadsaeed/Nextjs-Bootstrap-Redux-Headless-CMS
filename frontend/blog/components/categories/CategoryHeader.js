import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const CategoryHeader = ({propsData}) => {
  const [getCurrentCategory, setCurrentCategory] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategoryById = AppService.getCategoryById(propsData && propsData.catId);
    ReUse.getApiData(getCategoryById, setCurrentCategory, setLoading);

  }, []);


  return (
    <>
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span>Category</span>
              <h3>{getCurrentCategory ? getCurrentCategory.name : null}</h3>
              <p>
                {getCurrentCategory ? getCurrentCategory.description : null}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHeader;
