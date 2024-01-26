import React from 'react'
import { Link } from 'react-router-dom'

function Product({productdata}) {
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <Link  to={`productdetail/${productdata._id}`}>
                        <img className="img-fluid w-100" src={productdata.image[0].url} alt=""/>
                        </Link>
                        <div className="product-action">
                            <Link to={`productdetail/${productdata._id}`} className="btn btn-outline-dark btn-square"><i className="fa fa-shopping-cart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></Link>
                            <Link className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link className="h6 text-decoration-none text-truncate" to={`productdetail/${productdata._id}`}>{productdata.name}</Link>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>Rs {productdata.price}</h5><h6 className="text-muted ml-2"><del>Rs {productdata.price + 100}</del></h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small className="fa fa-star text-primary mr-1"></small>
                            <small>{productdata.stock}</small>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Product