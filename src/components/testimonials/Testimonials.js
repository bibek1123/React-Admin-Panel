import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {testimonialList} from '../../redux/actions/TestimonialActions'

import TestimonialCard from './TestimonialCard';
import { Link } from 'react-router-dom';

const Testimonials = () =>
{
   const dispatch = useDispatch()

   const testi = useSelector( state => state.testimonialList )
  const {testimonial} = testi
  

  useEffect(() => {
    dispatch(testimonialList())

  }, []);

  return (
    <div className='container py-3 pb-5'>
      <div className='row'>
        <div className='col-lg-2 offset-lg-10 offset-9 align-end col-3 mb-3'>
          <Link
            className='btn d-block btn-block btn-success'
            to='/add-testimonial'
          >
            Add a Testimonial
          </Link>
        </div>
      </div>
      <div className='banners-cards row'>
        {testimonial?.map((testimonial, index) => {
          return <TestimonialCard key={index} data={testimonial} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
