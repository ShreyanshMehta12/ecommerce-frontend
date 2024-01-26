import {
    ALL_SLIDER_REQUEST,
    ALL_SLIDER_SUCCESS,
    ALL_SLIDER_FAIL
}from '../constants/SliderConstant'

export const sliderReducer =(state={sliders:[]},action)=>{
    switch(action.type){
        case ALL_SLIDER_REQUEST:
            return {
                loading:true,
                sliders:[]
            }
        case ALL_SLIDER_SUCCESS:
            return {
                loading:false,
                sliders:action.payload.data
            }
        case ALL_SLIDER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}