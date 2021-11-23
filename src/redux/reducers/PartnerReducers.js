import {  PARTNER_DELETE_FAIL, PARTNER_DELETE_REQUEST, PARTNER_DELETE_SUCCESS, PARTNER_GET_FAIL, PARTNER_GET_REQUEST, PARTNER_GET_SUCCESS } from "../constants/PartnerConstants"


export const partner = ( state = {  }, action ) =>
{
    switch (action.type) {
        case PARTNER_GET_REQUEST:
            return {
                loading: true, 
            }
        case PARTNER_GET_SUCCESS:
            return {
                loading: false,
                partner: action.payload
            }
        case PARTNER_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}



export const partnerDelete = ( state = {}, action ) =>
{
    switch (action.type) {
        case PARTNER_DELETE_REQUEST:
            return {
                loading: true,
                
            }
        case PARTNER_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case PARTNER_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}