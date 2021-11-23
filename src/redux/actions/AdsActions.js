import axios from "axios"
import {  ADS_DELETE_FAIL, ADS_DELETE_REQUEST, ADS_DELETE_SUCCESS, ADS_GET_FAIL, ADS_GET_REQUEST, ADS_GET_SUCCESS } from "../constants/AdsConstants"

export const adss = () =>async(dispatch)=>
{
    try
    {
        
        dispatch( { type: ADS_GET_REQUEST } )
        const { data } = await axios.get( "https://www.test.pinsoutinnovation.com/advertisements" )
        
        dispatch( {
            type: ADS_GET_SUCCESS,
            payload: data.data
        })
        
    } catch (error) {
        dispatch( {
            type: ADS_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}


export const adsDelete = id => async ( dispatch ) =>
{
    try
    {
        dispatch( {type:ADS_DELETE_REQUEST})
        await axios.delete( `https://www.test.pinsoutinnovation.com/advertisements/${ id }` )
        dispatch( {
            type: ADS_DELETE_SUCCESS,
        })
        
    } catch (error) {
        dispatch( {
            type: ADS_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}