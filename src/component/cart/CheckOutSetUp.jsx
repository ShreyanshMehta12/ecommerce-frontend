import React from "react";
import { Link } from "react-router-dom";
import '../../App.css'

function CheckOutSetUp({shipping,ConfirmOrder,payment}) {
  return (
    <>
      <div className="checkout-progress d-flex justify-content-center mt-5">
        {shipping ? (
          <Link to="shipping" className="float-right">
            <div className="triangle2-active"></div>
            <div className="step active-step">Shipping</div>
            <div className="triangle-active"></div>
          </Link>
        ) : (
          <Link to="#!" disabled>
            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">Shipping</div>
            <div className="triangle-incomplete"></div>
          </Link>
        )}
        {ConfirmOrder ? (
          <Link to="/order/confirm" className="float-right">
            <div className="triangle2-active"></div>
            <div className="step active-step">ConfirmOrder</div>
            <div className="triangle-active"></div>
          </Link>
        ) : (
          <Link to="#!" disabled>
            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">ConfirmOrder</div>
            <div className="triangle-incomplete"></div>
          </Link>
        )}

        {payment ? (
          <Link to="/payment" className="float-right">
            <div className="triangle2-active"></div>
            <div className="step active-step">Payment</div>
            <div className="triangle-active"></div>
          </Link>
        ) : (
          <Link to="#!" disabled>
            <div className="triangle2-incomplete"></div>
            <div className="step incomplete">Payment</div>
            <div className="triangle-incomplete"></div>
          </Link>
        )}
      </div>
    </>
  );
}

export default CheckOutSetUp;
