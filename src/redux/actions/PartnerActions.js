import axios from 'axios'
import {PARTNER_DELETE_FAIL, PARTNER_DELETE_REQUEST, PARTNER_DELETE_SUCCESS, PARTNER_GET_FAIL, PARTNER_GET_REQUEST, PARTNER_GET_SUCCESS } from '../constants/PartnerConstants'


export const partnerList = () => async ( dispatch ) =>
{
    try
    {
        
        dispatch( { type: PARTNER_GET_REQUEST } )
        const { data } = await axios.get( "https://www.test.pinsoutinnovation.com/partners" )
        console.log(data)
        
        dispatch( {
            type: PARTNER_GET_SUCCESS,
            payload: data.data
        })
        
    } catch (error) {
        dispatch( {
            type: PARTNER_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}


export const partnerDelete = id => async ( dispatch ) =>
{
    try
    {
        dispatch( {type:PARTNER_DELETE_REQUEST})
        await axios.delete( `https://www.test.pinsoutinnovation.com/partners/${ id }` )
        dispatch( {
            type: PARTNER_DELETE_SUCCESS,
        })
        
    } catch (error) {
        dispatch( {
            type: PARTNER_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}