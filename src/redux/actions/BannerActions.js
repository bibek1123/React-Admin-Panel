import axios from 'axios'
import {  BANNER_DELETE_GET_FAIL, BANNER_DELETE_GET_REQUEST, BANNER_DELETE_GET_SUCCESS, BANNER_GET_FAIL, BANNER_GET_REQUEST, BANNER_GET_SUCCESS} from '../constants/BannerConstants'

export const banners = () =>async(dispatch)=>
{
    try
    {
        
        dispatch( { type: BANNER_GET_REQUEST } )
        const { data } = await axios.get( "https://www.test.pinsoutinnovation.com/banners" )
        
        dispatch( {
            type: BANNER_GET_SUCCESS,
            payload:data.data
        })
        
    } catch (error) {
        dispatch( {
            type: BANNER_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}





export const bannerDelete = ( id ) => async ( dispatch ) =>
{
    try
    {
         dispatch( { type: BANNER_DELETE_GET_REQUEST} )

        await axios.delete( `https://www.test.pinsoutinnovation.com/banners/${ id }` )
        dispatch( {
            type: BANNER_DELETE_GET_SUCCESS,
            
        })
        
    } catch (error) {
         dispatch( {
            type: BANNER_DELETE_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}