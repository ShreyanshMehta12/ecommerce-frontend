import React from "react";
import { useSelector } from "react-redux";
import CheckOutSetUp from "./CheckOutSetUp";
// import { Link } from "react-router-dom";
import "../../App.css";
import Loader from "../layouts/loader/Loader";
import Message from "../layouts/loader/Message";
import { useNavigate } from "react-router-dom";

function ConfirmOrder() {
  const navigate = useNavigate()
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.user);
  // calculate order price
  const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity,0);
  const shippingPrice = itemsPrice > 200 ? 0 : 25;
  const taxPrice = Number((0.05 * itemsPrice).toFixed(2));
  const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2);

  const proceed_to_payment =()=>{
    const data = {
      itemsPrice:itemsPrice.toFixed(2),
      shippingPrice,
      taxPrice,
      totalPrice
    }
    sessionStorage.setItem('orderInfo',JSON.stringify(data))
      navigate('/payment')
  }

  return (
    <>
      <CheckOutSetUp shipping ConfirmOrder />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8 mt-5 order-confirm">
              <h4 className="mb-3">Shipping Info</h4>
              <p>
                <b>Name:</b>
                {user.name}
              </p>
              <p>
                <b>Phone:</b> {shippingInfo.phoneNo}
              </p>
              <p className="mb-4">
                <b>Address:</b> {shippingInfo.address}
              </p>

              <hr />
              <h4 className="mt-4">Your Cart Items:</h4>

              <hr />
              <div className="cart-item my-1">
                <table className="table table-light table-borderless table-hover text-center mb-0">
                  <thead className="thead-dark">
                    <tr>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>

                  <tbody className="align-middle">
                    {cartItems.map((item) => (
                      <tr>
                        <td className="align-middle">
                          <img
                            src={item.image}
                            alt="product1"
                            style={{ width: "50px" }}
                          />{" "}
                          {item.name}
                        </td>
                        <td className="align-middle">{`₹${item.price}`} </td>
                        <td className="align-middle">
                          <div
                            className="input-group quantity mx-auto"
                            style={{ width: "130px" }}
                          >
                            <input
                              type="text"
                              name="quantity"
                              className="form-control form-control-sm bg-secondary border-0 text-center"
                              value={item.quantity}
                            />
                          </div>
                        </td>
                        <td className="align-middle">
                          {`₹${item.price * item.quantity}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <hr />
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values">{itemsPrice}</span>
                </p>
                <p>
                  Shipping:{" "}
                  <span className="order-summary-values">{shippingPrice}</span>
                </p>
                <p>
                  Tax: <span className="order-summary-values">{taxPrice}</span>
                </p>

                <hr />

                <p>
                  Total:{" "}
                  <span className="order-summary-values">{totalPrice}</span>
                </p>

                <hr />
                <button id="checkout_btn" className="btn btn-primary btn-block" onClick={proceed_to_payment}>
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ConfirmOrder;
