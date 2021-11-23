import axios from 'axios'
import { SHOWCASE_DELETE_FAIL, SHOWCASE_DELETE_REQUEST, SHOWCASE_DELETE_SUCCESS, SHOWCASE_GET_FAIL, SHOWCASE_GET_REQUEST, SHOWCASE_GET_SUCCESS } from '../constants/ShowcaseConstants'


export const showcaseList = () => async ( dispatch ) =>
{
    try
    {
        
        dispatch( { type: SHOWCASE_GET_REQUEST } )
        const { data } = await axios.get( "https://www.test.pinsoutinnovation.com/showcaseimages" )
    
        
        dispatch( {
            type: SHOWCASE_GET_SUCCESS,
            payload: data.data
        })
        
    } catch (error) {
        dispatch( {
            type: SHOWCASE_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}



export const showcaseDelete = id => async ( dispatch ) =>
{
    try
    {
        dispatch( {type:SHOWCASE_DELETE_REQUEST})
        await axios.delete( `https://www.test.pinsoutinnovation.com/showcaseimages/${ id }` )
        dispatch( {
            type: SHOWCASE_DELETE_SUCCESS,
        })
        
    } catch (error) {
        dispatch( {
            type: SHOWCASE_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}