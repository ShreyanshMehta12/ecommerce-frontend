import {
    ALL_SLIDER_REQUEST,
    ALL_SLIDER_SUCCESS,
    ALL_SLIDER_FAIL
}from '../constants/SliderConstant'

import axios from 'axios'

export const GetSlider =()=>async(dispatch)=>{
    try{
        dispatch({type:ALL_SLIDER_REQUEST})
        let link = 'https://ecommerceapi-d3ul.onrender.com/api/slider/display'
        const {data} = await axios.get(link)
        // console.log(data)
        dispatch({
            type:ALL_SLIDER_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ALL_SLIDER_FAIL,
            payload:error.response.data.message
        })
    }
}