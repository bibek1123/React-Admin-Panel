import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {adss,adsDelete} from '../../redux/actions/AdsActions'
import { Link } from 'react-router-dom';

const Ads = () => {
  
  const dispatch = useDispatch()
  const adsList = useSelector( state => state.adsList )
  const { ads } = adsList
  
  const adsDel = useSelector( state => state.adsDelete )
  const {success} = adsDel

  useEffect(() => {
    dispatch( adss() )
    
  }, [ dispatch ] );
  
  useEffect( () =>
  {
    if ( success )
    {
      window.location.reload();
    }
  },success)

  const handleDelete = (id) => {
    dispatch( adsDelete( id ) )
  };

  return (
    <div className='container py-3 pb-5'>
      <div className='row'>
        <div className='col-lg-2 offset-lg-10 offset-9 align-end col-3 mb-3'>
          <Link className='btn d-block btn-block btn-success' to='/add-ads'>
            Add a Ads
          </Link>
        </div>
      </div>
      <div className='banners-cards row'>
        {ads?.map((x, index) => {
          return (
            <div key={index} className=' col-lg-4 col-md-6 col-12 mb-4'>
              <div className='card'>
                <img
                  className='img-fluid'
                  src={
                    'https://www.test.pinsoutinnovation.com/uploaded-images/' +
                    x.ad_image
                  }
                  alt=''
                />
                <div className='px-3'>
                  <h5>Add Url : </h5>
                  <p className='lead'>{x.ad_url}</p>
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

export default Ads;
