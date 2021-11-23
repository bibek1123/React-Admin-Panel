import {  SHOWCASE_DELETE_FAIL, SHOWCASE_DELETE_REQUEST, SHOWCASE_DELETE_SUCCESS, SHOWCASE_GET_FAIL, SHOWCASE_GET_REQUEST, SHOWCASE_GET_SUCCESS } from "../constants/ShowcaseConstants"


export const showcase = ( state = {  }, action ) =>
{
    switch (action.type) {
        case SHOWCASE_GET_REQUEST:
            return {
                loading: true, 
            }
        case SHOWCASE_GET_SUCCESS:
            return {
                loading: false,
                showcase: action.payload
            }
        case SHOWCASE_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}



export const showcaseDelete = ( state = {}, action ) =>
{
    switch (action.type) {
        case SHOWCASE_DELETE_REQUEST:
            return {
                loading: true,
                
            }
        case SHOWCASE_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case SHOWCASE_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}