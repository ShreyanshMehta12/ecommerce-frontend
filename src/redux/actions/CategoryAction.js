import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_SUCCESS,
    CATEGORY_DETAILS_FAILED
}from '../constants/CategoryConstant'

import axios from 'axios'

export const GetCategory =()=>async(dispatch)=>{
    try{
        dispatch({type:ALL_CATEGORY_REQUEST})
        let link = '/category/display'
        const {data} = await axios.get(link)
        // console.log(data)
        dispatch({
            type:ALL_CATEGORY_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ALL_CATEGORY_FAIL,
            payload:error.response.data.message
        })
    }
}

export const GetCategoryDetail =(id) => async(dispatch) =>{
    // console.log(id)
      try {
          dispatch({ type: CATEGORY_DETAILS_REQUEST });
          let link = `/categorydetail/${id}`;
          const { data } = await axios.get(link);
          console.log(data)
          dispatch({
            type: CATEGORY_DETAILS_SUCCESS,
            payload: data,
          });
        } catch (error) {
          dispatch({
            type: CATEGORY_DETAILS_FAILED,
            payload: error.response.data.message,
          });
        }
  }
  