import axios from 'axios'
import { TESTIMONIAL_DELETE_FAIL, TESTIMONIAL_DELETE_REQUEST, TESTIMONIAL_DELETE_SUCCESS, TESTIMONIAL_GET_FAIL, TESTIMONIAL_GET_REQUEST, TESTIMONIAL_GET_SUCCESS } from '../constants/TestimonialConstants'


export const testimonialList = () => async ( dispatch ) =>
{
    try
    {
        
        dispatch( { type: TESTIMONIAL_GET_REQUEST } )
        const { data } = await axios.get( "https://www.test.pinsoutinnovation.com/testimonials" )
    
        
        dispatch( {
            type: TESTIMONIAL_GET_SUCCESS,
            payload: data.data
        })
        
    } catch (error) {
        dispatch( {
            type: TESTIMONIAL_GET_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}



export const testimonialDelete = id => async ( dispatch ) =>
{
    try
    {
        dispatch( {type:TESTIMONIAL_DELETE_REQUEST})
        await axios.delete( `https://www.test.pinsoutinnovation.com/testimonials/${ id }` )
        dispatch( {
            type: TESTIMONIAL_DELETE_SUCCESS,
        })
        
    } catch (error) {
        dispatch( {
            type: TESTIMONIAL_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.response
        } )
    }
}