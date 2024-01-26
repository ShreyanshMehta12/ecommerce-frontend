import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
} from "../constants/CartConstant";
import axios from "axios";

export const AddItemToCart =(id,quantity)=>async(dispatch,getState)=>{
    let link = `/productdetail/${id}`;
    const { data } = await axios.get(link);
    // console.log(data)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.productdetails._id,
            name: data.productdetails.name,
            price: data.productdetails.price,
            image: data.productdetails.image[0].url,
            stock: data.productdetails.stock,
            quantity,
        },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const AddcatItemToCart =(id,quantity)=>async(dispatch,getState)=>{
    let link = `/categorydetail/${id}`;
    const { data } = await axios.get(link);
    console.log(data)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.categorydetails._id,
            name: data.categorydetails.name,
            price: data.categorydetails.price,
            image: data.categorydetails.image[0].url,
            stock: data.categorydetails.stock,
            quantity,
        },
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

// remove cart
export const RemoveItemFromCart = (id)=>async(dispatch,getState)=>{
    dispatch({
        type: REMOVE_CART_ITEM,
        payload: id,
    });

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

// SAVE SHIPPING INFO
export const saveShippingInfo = (data) => async (dispatch) => {
    // console.log(data)
    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
    });

    localStorage.setItem("shippingInfo", JSON.stringify(data));
};

