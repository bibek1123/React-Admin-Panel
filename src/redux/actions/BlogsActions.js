import axios from 'axios'
import {  BLOGS_DELETE_FAIL, BLOGS_DELETE_REQUEST, BLOGS_DELETE_SUCCESS, BLOGS_GET_FAIL, BLOGS_GET_REQUEST, BLOGS_GET_SUCCESS } from '../constants/BlogsConstants'


export const blogsList = () => async ( dispatch ) =>
{
    try
    {
        
        dispatch( { type: BLOGS_GET_REQUEST } )
        const { data } = await axios.get( "https://www.test.pinsoutinnovation.com/blogs" )
        
        dispatch( {
            type: BLOGS_GET_SUCCESS,
            payload: data.data
        })
        
    } catch (error) {
        dispatch( {
            type: BLOGS_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}



export const blogsDelete = id => async ( dispatch ) =>
{
    try
    {
        dispatch( {type:BLOGS_DELETE_REQUEST})
        await axios.delete( `https://www.test.pinsoutinnovation.com/blogs/${ id }` )
        dispatch( {
            type: BLOGS_DELETE_SUCCESS,
        })
        
    } catch (error) {
        dispatch( {
            type: BLOGS_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}


