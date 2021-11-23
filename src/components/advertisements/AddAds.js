import React, { useState } from 'react';

const AddAds = () =>
{
  const [ads_image, SetAdsImg] = useState('');
  const [ads_url, SetAdsURL] = useState('');

  const [uploadedImage, setUploadedImage] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPSspSdxbED4NVPS4AnmoyCV6cpQhm0Qxvu6Bo5rF4mLhAD0lkjRVn45RsMnB4ZT4ZP28&usqp=CAU'
  );

  const handleChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUploadedImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className='row'>
      <div className='col-lg-6 offset-lg-3 col-sm-8 offset-sm-2'>
        <form
          method='POST'
          encType='multipart/form-data'
          action='https://www.test.pinsoutinnovation.com/advertisements'
          className='card p-3 mt-4'
          
        >
          <fieldset>
            <div className='form-group mb-3'>
              <label htmlFor='img-file' className='form-label'>
                Ads Image :
              </label>
              <input
                className='form-control'
                type='file'
                id='img-file'
                name='AdsImage'
                value={ads_image}
                accept='image/png, image/jpeg'
                onChange={(e) => {
                  handleChange(e);
                  SetAdsImg(e.target.value);
                }}
              />
            </div>

            <div className='py-3'>
              <img
                src={uploadedImage}
                alt=''
                width='100%'
                height='400px'
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className='form-group mt-2 mb-3'>
              <label htmlFor='url' className='form-label'>
                Ads URL :
              </label>
              <input
                type='text'
                name='ad_url'
                placeholder='Enter Ad URL'
                value={ads_url}
                onChange={(e) => SetAdsURL(e.target.value)}
                className='form-control'
              />
            </div>

            <div className='row text-center'>
              <div className='form-group'>
                <input
                  type='submit'
                  className='btn btn-block btn-success'
                  value='Add Ads'
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddAds;