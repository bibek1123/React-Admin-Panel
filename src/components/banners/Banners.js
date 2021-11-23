import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {banners} from '../../redux/actions/BannerActions'
import BannerCard from './BannerCard';
import { Link } from 'react-router-dom';

const Banners = () => {
  
  const dispatch = useDispatch()
  const bannerList = useSelector( state => state.bannerList )
  const {banner} = bannerList
  
  
  useEffect(() => {
    dispatch(banners())
  }, [dispatch]);

  return (
    <div className='container py-3 pb-5'>
      <div className='row'>
        <div className='col-lg-2 offset-lg-10 offset-9 align-end col-3 mb-3'>
          <Link className='btn d-block btn-block btn-success' to='/add-banner'>
            Add a banner
          </Link>
        </div>
      </div>
      <div className='banners-cards row'>
        {banner?.map((banner, index) => {
          return <BannerCard key={index} data={banner} />;
        })}
      </div>
    </div>
  );
};

export default Banners;
