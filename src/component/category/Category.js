import React from "react";
import { Link } from "react-router-dom";

function Category({categorydata}) {
// console.log(categorydata)
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <Link className="text-decoration-none" href="">
          <div className="cat-item d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: "100px", height: "100px" }}
            >
              <Link  to={`categorydetail/${categorydata._id}`}>
              <img className="img-fluid" src={categorydata.image[0].url} alt="" />
              </Link>
            </div>
            <div className="flex-fill pl-3">
            <Link  to={`categorydetail/${categorydata._id}`}>
              <h6>{categorydata.name}</h6>
              <small className="text-body">100 Products</small>
            </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Category;
