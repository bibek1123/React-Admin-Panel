import axios from 'axios'
import {  WEBCONTENTS_GET_FAIL, WEBCONTENTS_GET_REQUEST, WEBCONTENTS_GET_SUCCESS } from '../constants/WebcontentsConstants'


export const webcontentsList = () => async ( dispatch ) =>
{
    try
    {
        
        dispatch( { type: WEBCONTENTS_GET_REQUEST } )
        const { data } = await axios.get( "https://www.test.pinsoutinnovation.com/websitecontents" )
    
        
        dispatch( {
            type: WEBCONTENTS_GET_SUCCESS,
            payload: data.data
        })
        
    } catch (error) {
        dispatch( {
            type: WEBCONTENTS_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}



