import React, { useState } from 'react';

const AddShowcaseImages = () => {
  const [ads_image, SetShowcaseImagesImg] = useState('');
  const [ads_url, SetShowcaseImagesURL] = useState('');

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
          action='https://www.test.pinsoutinnovation.com/showcaseimages'
          className='card p-3 mt-4'
        >
          <fieldset>
            <div className='form-group mb-3'>
              <label htmlFor='img-file' className='form-label'>
                ShowcaseImages Image :
              </label>
              <input
                className='form-control'
                type='file'
                id='img-file'
                name='ShowcaseImage'
                value={ads_image}
                accept='image/png, image/jpeg'
                onChange={(e) => {
                  handleChange(e);
                  SetShowcaseImagesImg(e.target.value);
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

            <div className='form-group mb-3'>
              <label htmlFor='url' className='form-label'>
                ShowcaseImages URL :
              </label>
              <input
                type='text'
                name='url'
                placeholder='Enter Ad URL'
                value={ads_url}
                onChange={(e) => SetShowcaseImagesURL(e.target.value)}
                className='form-control'
              />
            </div>

            <div className='row text-center'>
              <div className='form-group'>
                <input
                  type='submit'
                  className='btn btn-block btn-success'
                  value='Add ShowcaseImages'
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddShowcaseImages;