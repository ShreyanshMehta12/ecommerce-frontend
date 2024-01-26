import React from "react";
import { Link } from "react-router-dom";

function Slider({ sliderdata }) {
  return (
    <>
      <div
        className="carousel-item position-relative active"
        style={{ height: "460px" }}
      >
        <img
          className="position-absolute w-100 h-100"
          src={sliderdata.image[0].url}
          alt=""
          style={{ objectFit: "cover" }}
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3" style={{ maxWidth: "700px" }}>
            <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
              {sliderdata.title}
            </h1>
            <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
              {sliderdata.description}
            </p>
            <Link
              className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
              href="#"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
