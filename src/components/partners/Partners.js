import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { partnerList, partnerDelete } from '../../redux/actions/PartnerActions';
import { Link } from 'react-router-dom';

const Partners = () => {
  const dispatch = useDispatch();
  const partnersList = useSelector((state) => state.partnerList);
  const { partner } = partnersList;

  const newsDel = useSelector((state) => state.partnerDelete);
  const { success } = newsDel;

  useEffect(() => {
    dispatch(partnerList());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      window.location.reload();
    }
  }, success);

  const handleDelete = (id) => {
    dispatch(partnerDelete(id));
  };

  return (
    <div className='container py-3 pb-5'>
      <div className='row'>
        <div className='col-lg-2 offset-lg-10 offset-9 align-end col-3 mb-3'>
          <Link
            className='btn d-block btn-block btn-success'
            to='/add-partners'
          >
            Add a Partners
          </Link>
        </div>
      </div>
      <div className='banners-cards row'>
        {partner?.map((x, index) => {
          return (
            <div key={index} className=' col-lg-4 col-md-6 col-12 mb-4'>
              <div className='card'>
                <img
                  className='img-fluid'
                  src={
                    'https://www.test.pinsoutinnovation.com/uploaded-images/' +
                    x.partners_img
                  }
                  alt=''
                />
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

export default Partners;
