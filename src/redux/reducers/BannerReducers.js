import {  BANNER_DELETE_GET_FAIL, BANNER_DELETE_GET_REQUEST, BANNER_DELETE_GET_SUCCESS, BANNER_GET_FAIL, BANNER_GET_REQUEST, BANNER_GET_SUCCESS } from "../constants/BannerConstants"


export const banner = ( state = {}, action ) =>
{
    switch (action.type) {
        case BANNER_GET_REQUEST:
            return {
                loading: true,
                
            }
        case BANNER_GET_SUCCESS:
            return {
                loading: false,
                banner: action.payload
            }
        case BANNER_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}





export const bannerDelete = ( state = {}, action ) =>
{
    switch (action.type) {
        case BANNER_DELETE_GET_REQUEST:
            return {
                loading: true,  
            }
        case BANNER_DELETE_GET_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case BANNER_DELETE_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}



