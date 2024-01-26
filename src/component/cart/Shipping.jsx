import React,{useState} from "react";
import {useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {saveShippingInfo} from "../../redux/actions/CartAction"
import '../../App.css'
import CheckOutSetUp from "./CheckOutSetUp";

function Shipping() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //const countriesList = Object.value(countries)
    const { shippingInfo } = useSelector(state => state.cart)

    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setcity] = useState(shippingInfo.city)
    const [postalcode, setPostalCode] = useState(shippingInfo.postalcode)
    const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo)
    const [country, setCountry] = useState(shippingInfo.country)

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(saveShippingInfo({
            address,city,postalcode,phoneNo,country      
        }))
        navigate('/order/confirm')

    }
  return (
    <>
    <CheckOutSetUp shipping />
      <div class="row wrapper">
        <div class="col-10 col-lg-5">
          <form class="shadow-lg" onSubmit={submitHandler}>
            <h1 class="mb-4">Shipping Info</h1>
            <div class="form-group">
              <label for="address_field">Address</label>
              <input
                type="text"
                id="address_field"
                class="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label htmlFor="city_field">City</label>
              <input
                type="text"
                id="city_field"
                class="form-control"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label htmlFor="phone_field">Phone No</label>
              <input
                type="phone"
                id="phone_field"
                class="form-control"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label for="postal_code_field">Postal Code</label>
              <input
                type="number"
                id="postal_code_field"
                class="form-control"
                value={postalcode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label for="country_field">Country</label>
              <select
                id="country_field"
                class="form-control"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option>seletc country</option>
                <option value="IN">India</option>
              </select>
            </div>

            <button id="shipping_btn" type="submit" class="btn btn-block py-3">
              CONTINUE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Shipping;
