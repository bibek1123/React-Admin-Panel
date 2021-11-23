import React, { useEffect }from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {testimonialDelete} from '../../redux/actions/TestimonialActions'

const TestimonialCard = (props) => {
  
   const dispatch = useDispatch()

   const showcaseDel = useSelector( state => state.testimonialDelete )
  const {success} = showcaseDel
  
  useEffect( () =>
  {
    if ( success )
    {
      window.location.reload();
    }
  },success)

  const handleDelete = (id) => {
   dispatch(testimonialDelete(id))
  };

  return (
    <div className='banner-card col-lg-4 col-md-6 my-4'>
      <div className='card'>
        <img
          className='card-img-top'
          src={
            'https://www.test.pinsoutinnovation.com/uploaded-images/' +
            props.data.testimonial_image
          }
          alt=''
        />
        <div className='card-body'>
          <hr
            style={{
              marginTop: 0,
            }}
          />
          <div className='mb-3'>
            <h5 className='card-title sec'>Text</h5>
            <p className=''>{props.data.text}</p>
          </div>
          <div className='mb-3'>
            <h5 className='card-title sec'>Author : </h5>
            <p className=''>{props.data.author}</p>
          </div>
          <div className='mb-3'>
            <h5 className='card-title sec'>Post : </h5>
            <p className=''>{props.data.post}</p>
          </div>

          <div className='d-flex justify-content-between'>
            <Link
              to={'/edit-testimonial/' + props.data.id}
              className='btn btn-sm px-4 btn-warning'
            >
              <i className='fas fa-edit'></i>
            </Link>
            <button
              className='btn btn-danger btn-sm px-4'
              onClick={() => {
                handleDelete(props.data.id);
              }}
            >
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
