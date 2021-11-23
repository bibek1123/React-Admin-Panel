import {  TESTIMONIAL_DELETE_FAIL, TESTIMONIAL_DELETE_REQUEST, TESTIMONIAL_DELETE_SUCCESS, TESTIMONIAL_GET_FAIL, TESTIMONIAL_GET_REQUEST, TESTIMONIAL_GET_SUCCESS } from "../constants/TestimonialConstants"


export const testimonialList = ( state = {  }, action ) =>
{
    switch (action.type) {
        case TESTIMONIAL_GET_REQUEST:
            return {
                loading: true, 
            }
        case TESTIMONIAL_GET_SUCCESS:
            return {
                loading: false,
                testimonial: action.payload
            }
        case TESTIMONIAL_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}



export const testimonialDelete = ( state = {}, action ) =>
{
    switch (action.type) {
        case TESTIMONIAL_DELETE_REQUEST:
            return {
                loading: true,
                
            }
        case TESTIMONIAL_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case TESTIMONIAL_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}