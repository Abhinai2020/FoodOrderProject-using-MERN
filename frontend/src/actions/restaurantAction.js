import axios from "axios";
import { ALL_RESTAURANTS_FAIL, ALL_RESTAURANTS_REQUEST,ALL_RESTAURANTS_SUCCESS, CLEAR_ERROR, TOGGLE_VEG_ONLY,SORT_BY_RATINGS,SORT_BY_REVIEWS } from "../constants/restaurantConstant"

export const getRestaurants=()=>{
    return async(dispatch)=>{
        dispatch({type:ALL_RESTAURANTS_REQUEST});
        let link='/api/v1/eats/stores';
        const {data}=await axios.get(link);
        // console.log(data);
        const {restaurants,count}=data;
       try {
        dispatch({
            type:ALL_RESTAURANTS_SUCCESS,
            payload:{restaurants,count},
        })
       } catch (error) {
        // console.log(error);
        dispatch({
            type:ALL_RESTAURANTS_FAIL,
            payload:error.response.data.message,
        })
       }
    }
}

export const sortByRatings=()=>{
    return {
        type:SORT_BY_RATINGS,
    }
}
export const sortByReviews=()=>{
    return {
        type:SORT_BY_REVIEWS,
    }
}
export const toggleVegOnly=()=>{
    return {
        type:TOGGLE_VEG_ONLY,
    }
}
export const clearError=()=>{
    return {
        type:CLEAR_ERROR,
    }
}