import {  BLOGS_DELETE_FAIL, BLOGS_DELETE_REQUEST, BLOGS_DELETE_SUCCESS,  BLOGS_GET_FAIL, BLOGS_GET_REQUEST, BLOGS_GET_SUCCESS } from "../constants/BlogsConstants"


export const blogs = ( state = { }, action ) =>
{
    switch (action.type) {
        case BLOGS_GET_REQUEST:
            return {
                loading: true,
               
            }
        case BLOGS_GET_SUCCESS:
            return {
                loading: false,
                blogs: action.payload
            }
        case BLOGS_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}




export const blogsDelete = ( state = {}, action ) =>
{
    switch (action.type) {
        case BLOGS_DELETE_REQUEST:
            return {
                loading: true,
                
            }
        case BLOGS_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case BLOGS_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
             return state
    }
}


