import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {showcaseList,showcaseDelete} from '../../redux/actions/ShowcaseActions'

const ShowcaseImages = () => {


   const dispatch = useDispatch()
  const showcasesList = useSelector( state => state.showcaseList )
  const { showcase } = showcasesList

   const showcaseDel = useSelector( state => state.showcaseDelete )
  const {success} = showcaseDel

  useEffect(() => {
    dispatch( showcaseList() )
    
    
  }, [ dispatch ] );
  
  useEffect( () =>
  {
    if ( success )
    {
      window.location.reload();
    }
  },success)

  const handleDelete = (id) => {
   dispatch(showcaseDelete(id))
  };


  return (
    <div className='container py-3 pb-5'>
      <div className='row'>
        <div className='col-lg-2 offset-lg-10 offset-9 align-end col-3 mb-3'>
          <Link
            className='btn d-block btn-block btn-success'
            to='/add-showcaseImages'
          >
            Add Showcase Image
          </Link>
        </div>
      </div>
      <div className='banners-cards row'>
        {showcase?.map((x, index) => {
          return (
            <div key={index} className=' col-lg-4 col-md-6 col-12 mb-4'>
              <div className='card'>
                <img
                  className='img-fluid'
                  src={
                    'https://www.test.pinsoutinnovation.com/uploaded-images/' +
                    x.image
                  }
                  alt=''
                />
                <div className='px-3'>
                  <h5>ShowcaseImage Url : </h5>
                  <p className='lead'>{x.url}</p>
                </div>
                <hr className='mb-0' />
                <div className='row text-center'>
                  <div className='form-group'>
                    <button
                      className='btn btn-danger btn-sm px-4 my-2'
                      onClick={() => {
                        handleDelete(x.id);
                      }}
                    >
                      <i className='fas fa-trash'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowcaseImages;
