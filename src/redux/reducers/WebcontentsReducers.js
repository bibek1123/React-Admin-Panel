import {  WEBCONTENTS_GET_FAIL, WEBCONTENTS_GET_REQUEST, WEBCONTENTS_GET_SUCCESS,  } from "../constants/WebcontentsConstants"


export const webcontents = ( state = {  }, action ) =>
{
    switch (action.type) {
        case WEBCONTENTS_GET_REQUEST:
            return {
                loading: true, 
            }
        case WEBCONTENTS_GET_SUCCESS:
            return {
                loading: false,
                webcontents: action.payload
            }
        case WEBCONTENTS_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}


