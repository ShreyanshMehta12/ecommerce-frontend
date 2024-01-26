import React from 'react'
import { Link } from 'react-router-dom'

function Detail() {
  return (
    <>
     {/* Breadcrumb Start */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                    <Link className="breadcrumb-item text-dark" to="/shop">Shop</Link>
                    <span className="breadcrumb-item active">Shop Detail</span>
                </nav>
            </div>
        </div>
    </div>
    {/* Breadcrumb End */}


    {/* Shop Detail Start */}
    <div class="container-fluid pb-5">
        <div class="row px-xl-5">
          <div class="col-lg-5 mb-30">
            <div
              id="product-carousel"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner bg-light">
                <div class="carousel-item active">
                  <img class="w-100 h-100" src="img/product-1.jpg" alt="" />
                </div>
                <div class="carousel-item">
                  <img class="w-100 h-100" src="img/product-2.jpg" alt="" />
                </div>
                <div class="carousel-item">
                  <img class="w-100 h-100" src="img/product-3.jpg" alt="" />
                </div>
                <div class="carousel-item">
                  <img class="w-100 h-100" src="img/product-4.jpg" alt="" />
                </div>
              </div>
              <Link
                class="carousel-control-prev"
                to="#product-carousel"
                data-slide="prev"
              >
                <i class="fa fa-2x fa-angle-left text-dark"></i>
              </Link>
              <Link
                class="carousel-control-next"
                to="#product-carousel"
                data-slide="next"
              >
                <i class="fa fa-2x fa-angle-right text-dark"></i>
              </Link>
            </div>
          </div>

          <div class="col-lg-7 h-auto mb-30">
            <div class="h-100 bg-light p-30">
              <h3 style={{ color: "purple" }}>DSLR_Camera</h3>
              <div class="d-flex mb-3">
                <div class="text-primary mr-2">
                  <large class="fas fa-star"></large>
                  <large class="fas fa-star"></large>
                  <large class="fas fa-star"></large>
                  <large class="fas fa-star-half-alt"></large>
                  <large class="far fa-star"></large>
                </div>
              </div>
              <h3 class="font-weight-semi-bold mb-4">Rs.48000</h3>
              <p class="mb-4">
              <b>  The reflex design scheme is the primary difference between a
                DSLR and other digital cameras. In the reflex design, light
                travels through the lens and then to a mirror that alternates to
                send .</b>
              </p>
              <div class="d-flex mb-3">
                <strong class="text-dark mr-3">
                  <b style={{ color: "black" }}>Sizes:</b>
                </strong>
                <form>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="size-1"
                      name="size"
                    />
                    <label class="custom-control-label" for="size-1">
                      <b style={{ color: "blue" }}>XS</b>
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="size-2"
                      name="size"
                    />
                    <label class="custom-control-label" for="size-2">
                      <b style={{ color: "blue" }}>S</b>
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="size-3"
                      name="size"
                    />
                    <label class="custom-control-label" for="size-3">
                      <b style={{ color: "blue" }}>M</b>
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="size-4"
                      name="size"
                    />
                    <label class="custom-control-label" for="size-4">
                      <b style={{ color: "blue" }}>L</b>
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="size-5"
                      name="size"
                    />
                    <label class="custom-control-label" for="size-5">
                      <b style={{ color: "blue" }}>XL</b>
                    </label>
                  </div>
                </form>
              </div>
              <div class="d-flex mb-4">
                <strong class="text-dark mr-3">
                  <b style={{ color: "black" }}>Colors:</b>
                </strong>
                <form>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="color-1"
                      name="color"
                    />
                    <label class="custom-control-label" for="color-1">
                      <b style={{ color: "blue" }}>Black</b>
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="color-2"
                      name="color"
                    />
                    <label class="custom-control-label" for="color-2">
                      <b style={{ color: "blue" }}>White</b>
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="color-3"
                      name="color"
                    />
                    <label class="custom-control-label" for="color-3">
                      <b style={{ color: "blue" }}>Red</b>
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="color-4"
                      name="color"
                    />
                    <label class="custom-control-label" for="color-4">
                      <b style={{ color: "blue" }}>Blue</b>
                    </label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="color-5"
                      name="color"
                    />
                    <label class="custom-control-label" for="color-5">
                      <b style={{ color: "blue" }}>Green</b>
                    </label>
                  </div>
                </form>
              </div>
              <div class="d-flex align-items-center mb-4 pt-2">
                <div
                  class="input-group quantity mr-3"
                  style={{ width: "140px" }}
                >
                  <div class="input-group-btn">
                    <button class="btn btn-primary btn-minus">
                      <i class="fa fa-minus" style={{ color: "red" }}></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control bg-secondary border-0 text-center"
                    value="1"
                  />
                  <div class="input-group-btn">
                    <button class="btn btn-primary btn-plus">
                      <i class="fa fa-plus" style={{ color: "red" }}></i>
                    </button>
                  </div>
                </div>
                <button class="btn btn-primary px-3">
                  <i class="fa fa-shopping-cart mr-1"></i>{" "}
                  <b style={{ color: "red" }}>Add to Cart</b>
                </button>
              </div>
              <div class="d-flex pt-2">
                <strong class="text-dark mr-2">Share on:</strong>
                <div class="d-inline-flex">
                  <Link class="text-dark px-2" to="/">
                    <i class="fab fa-facebook-f"></i>
                  </Link>
                  <Link class="text-dark px-2" to="/">
                    <i class="fab fa-twitter"></i>
                  </Link>
                  <Link class="text-dark px-2" to="/">
                    <i class="fab fa-linkedin-in"></i>
                  </Link>
                  <Link class="text-dark px-2" to="/">
                    <i class="fab fa-pinterest"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row px-xl-5">
          <div class="col">
            <div class="bg-light p-30">
              <div class="nav nav-tabs mb-4">
                <a
                  class="nav-item nav-link text-dark active"
                  data-toggle="tab"
                  href="#tab-pane-1"
                >
                  <b style={{ color: "purple" }}>Description</b>
                </a>
                <a
                  class="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-2"
                >
                  <b style={{ color: "purple" }}>Information</b>
                </a>
                <a
                  class="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-3"
                >
                  <b style={{ color: "purple" }}>Reviews (0)</b>
                </a>
              </div>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tab-pane-1">
                  <h4 class="mb-3" style={{ color: "black" }}>
                    <b>Product Description</b>
                  </h4>
                  <p>
                    <b>The reflex design scheme is the primary difference between a
                    DSLR and other digital cameras. In the reflex design, light
                    travels through the lens and then to a mirror that
                    alternates to send the image to either a prism, which shows
                    the image in the optical viewfinder, or the image sensor
                    when the shutter release button is pressed. The viewfinder
                    of a DSLR presents an image that will not differ
                    substantially from what is captured by the camera's sensor
                    as it presents it as a direct optical view through the main
                    camera lens, rather than showing an image through a separate
                    secondary lens.</b>
                  </p>
                  <p>
                   <b> DSLRs typically use autofocus based on phase detection. This
                    method allows the optimal lens position to be calculated,
                    rather than "found", as would be the case with autofocus
                    based on contrast maximisation. Phase-detection autofocus is
                    typically faster than other passive techniques. As the phase
                    sensor requires the same light going to the image sensor, it
                    was previously only possible with an SLR design.</b>
                  </p>
                </div>
                <div class="tab-pane fade" id="tab-pane-2">
                  <h4 class="mb-3">
                    <b style={{ color: "black" }}>Additional Information</b>
                  </h4>
                  <p>
                    <b>The reflex design scheme is the primary difference between a
                    DSLR and other digital cameras. In the reflex design, light
                    travels through the lens and then to a mirror that
                    alternates to send the image to either a prism, which shows
                    the image in the optical viewfinder, or the image sensor
                    when the shutter release button is pressed. The viewfinder
                    of a DSLR presents an image that will not differ
                    substantially from what is captured by the camera's sensor
                    as it presents it as a direct optical view through the main
                    camera lens, rather than showing an image through a separate
                    secondary lens.</b>
                  </p>
                  <div class="row">
                    <div class="col-md-6">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod
                          takimata.
                        </li>
                        <li class="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos
                          sadipscing at.
                        </li>
                        <li class="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li class="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo
                          voluptua. Nonumy.
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod
                          takimata.
                        </li>
                        <li class="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos
                          sadipscing at.
                        </li>
                        <li class="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li class="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo
                          voluptua. Nonumy.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab-pane-3">
                  <div class="row">
                    <div class="col-md-6">
                      <h4 class="mb-4">
                        <b style={{ color: "black" }}>
                          1 review for "DSLR_Camera"
                        </b>
                      </h4>
                      <div class="media mb-4">
                        <img
                          src="img/2.jpeg"
                          alt=""
                          class="img-fluid mr-3 mt-1"
                          style={{ width: "45px" }}
                        />
                        <div class="media-body">
                          <h6>
                            Sonam Sahu
                            <small>
                              {" "}
                              - <i>08 July 2004</i>
                            </small>
                          </h6>
                          <div class="text-primary mb-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <i class="far fa-star"></i>
                          </div>
                          <p>
                            A user agent is any software that retrieves and
                            presents Web content for end users or is implemented
                            using Web technologies. User agents include Web
                            browsers, media players,
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <h4 class="mb-4"><b style={{color:'black'}}>Leave a review</b></h4>
                      <small>
                        Your email address will not be published. Required
                        fields are marked *
                      </small>
                      <div class="d-flex my-3">
                        <p class="mb-0 mr-2" style={{color:'red'}}><b>Your Rating * :</b></p>
                        <div class="text-primary">
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                          <i class="far fa-star"></i>
                        </div>
                      </div>
                      <form>
                        <div class="form-group">
                          <label for="message" style={{color:'red'}}><b>Your Review *</b></label>
                          <textarea
                            id="message"
                            cols="30"
                            rows="5"
                            class="form-control"
                          ></textarea>
                        </div>
                        <div class="form-group">
                          <label for="name" style={{color:'red'}}><b>Your Name *</b></label>
                          <input type="text" class="form-control" id="name" />
                        </div>
                        <div class="form-group">
                          <label for="email" style={{color:'red'}}><b>Your Email *</b></label>
                          <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="form-group mb-0">
                          <input
                            type="submit"
                            value="Leave Your Review"
                            class="btn btn-primary px-3"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* Shop Detail End */}


    {/* Products Start */}
    {/* <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">You May Also Like</span></h2>
        <div className="row px-xl-5">
            <div className="col">
                <div className="owl-carousel related-carousel">
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>Rs 123.00</h5><h6 className="text-muted ml-2"><del>Rs 123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>Rs 123.00</h5><h6 className="text-muted ml-2"><del>Rs 123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>Rs 123.00</h5><h6 className="text-muted ml-2"><del>Rs 123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>Rs 123.00</h5><h6 className="text-muted ml-2"><del>Rs 123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                    <div className="product-item bg-light">
                        <div className="product-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                            <div className="product-action">
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-search"></i></Link>
                            </div>
                        </div>
                        <div className="text-center py-4">
                            <Link className="h6 text-decoration-none text-truncate" to="">Product Name Goes Here</Link>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                                <h5>Rs 123.00</h5><h6 className="text-muted ml-2"><del>Rs 123.00</del></h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small className="fa fa-star text-primary mr-1"></small>
                                <small>(99)</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    {/* Products End */}

    
    {/*Back to Top */}
    {/* <Link to="#" class="btn btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></Link> */}
    </>
  )
}

export default Detail