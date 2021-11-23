import {  NEWS_DELETE_FAIL, NEWS_DELETE_REQUEST, NEWS_DELETE_SUCCESS, NEWS_GET_FAIL, NEWS_GET_REQUEST, NEWS_GET_SUCCESS } from "../constants/NewsConstants"


export const news = ( state = {  }, action ) =>
{
    switch (action.type) {
        case NEWS_GET_REQUEST:
            return {
                loading: true, 
            }
        case NEWS_GET_SUCCESS:
            return {
                loading: false,
                news: action.payload
            }
        case NEWS_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}



export const newsDelete = ( state = {}, action ) =>
{
    switch (action.type) {
        case NEWS_DELETE_REQUEST:
            return {
                loading: true,
                
            }
        case NEWS_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case NEWS_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}