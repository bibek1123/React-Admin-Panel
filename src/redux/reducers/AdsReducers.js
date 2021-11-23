import {ADS_DELETE_FAIL, ADS_DELETE_REQUEST, ADS_DELETE_SUCCESS, ADS_GET_FAIL, ADS_GET_REQUEST, ADS_GET_SUCCESS } from "../constants/AdsConstants"

export const ads = ( state = {}, action ) =>
{
    switch (action.type) {
        case ADS_GET_REQUEST:
            return {
                loading: true,
            }
        case ADS_GET_SUCCESS:
            return {
                loading: false,
                ads: action.payload
            }
        case ADS_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}



export const adsDelete = ( state = {}, action ) =>
{
    switch (action.type) {
        case ADS_DELETE_REQUEST:
            return {
                loading: true,
                
            }
        case ADS_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case ADS_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}