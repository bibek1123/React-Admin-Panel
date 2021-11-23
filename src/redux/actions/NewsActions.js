import axios from 'axios'
import {  NEWS_DELETE_FAIL, NEWS_DELETE_REQUEST, NEWS_DELETE_SUCCESS, NEWS_GET_FAIL, NEWS_GET_REQUEST, NEWS_GET_SUCCESS } from '../constants/NewsConstants'


export const newsList = () => async ( dispatch ) =>
{
    try
    {
        
        dispatch( { type: NEWS_GET_REQUEST } )
        const { data } = await axios.get( "https://www.test.pinsoutinnovation.com/news" )
        console.log(data)
        
        dispatch( {
            type: NEWS_GET_SUCCESS,
            payload: data.data
        })
        
    } catch (error) {
        dispatch( {
            type: NEWS_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}

export const newsDelete = id => async ( dispatch ) =>
{
    try
    {
        dispatch( {type:NEWS_DELETE_REQUEST})
        await axios.delete( `https://www.test.pinsoutinnovation.com/news/${ id }` )
        dispatch( {
            type: NEWS_DELETE_SUCCESS,
        })
        
    } catch (error) {
        dispatch( {
            type: NEWS_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}