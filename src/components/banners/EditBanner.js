import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const EditBanners = (props) => {
  const [banner_image, SetBannerImg] = useState('');
  const [banner_title, SetBannerTitle] = useState('');
  const [banner_bg_color, SetBannerBgColor] = useState('');
  const [banner_title_color, SetBannerTitleColor] = useState('');
  const [button, SetButton] = useState(0);
  const [button_text, SetButtonText] = useState('');
  const [button_action_url, SetButtonActionUrl] = useState('');

  useEffect(() => {
    Axios.get(
      'https://www.test.pinsoutinnovation.com/banners/' + props.match.params.id
    ).then((res) => {
      // console.log(res.data);
      SetBannerImg(res.data.data.banner_image);
      setUploadedImage(
        'https://www.test.pinsoutinnovation.com/uploaded-images/' +
          res.data.data.banner_image
      );
      SetBannerTitle(res.data.data.banner_title);
      SetBannerBgColor(res.data.data.banner_bg_color);
      SetBannerTitleColor(res.data.data.banner_title_color);
      SetButton(res.data.data.button);
      SetButtonText(res.data.data.button_text);
      SetButtonActionUrl(res.data.data.button_action_url);
    });
  }, [props.match.params.id]);

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
    <div className='row mb-5'>
      <div className='col-lg-6 offset-lg-3 col-sm-8 offset-sm-2'>
        <form
          method='POST'
          encType='multipart/form-data'
          action={
            'https://www.test.pinsoutinnovation.com/banners/' +
            props.match.params.id
          }
          className='card p-3 mt-4'
        >
          <fieldset>
            <div className='form-group mb-3'>
              <label htmlFor='img-file' className='form-label'>
                Banner Image :
              </label>
              <input
                className='form-control'
                type='file'
                id='img-file'
                name='BannerImage'
                accept='image/png, image/jpeg'
                onChange={(e) => {
                  handleChange(e);
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
              <label htmlFor='title'>Enter banner title : </label>
              <input
                name='BannerTitle'
                type='text'
                id='title'
                className='form-control'
                placeholder='Enter Banner Title'
                value={banner_title}
                onChange={(e) => {
                  SetBannerTitle(e.target.value);
                }}
              />
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='banner-title-color'>Banner Title Color : </label>
              <input
                className='form-control'
                type='color'
                name='BannerTitleColor'
                id='banner-title-color'
                value={banner_title_color}
                onChange={(e) => {
                  SetBannerTitleColor(e.target.value);
                }}
              />
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='banner-bg-color'>
                Banner Background Color :{' '}
              </label>
              <input
                className='form-control'
                type='color'
                name='BannerBgColor'
                id='banner-bg-color'
                value={banner_bg_color}
                onChange={(e) => {
                  SetBannerBgColor(e.target.value);
                }}
              />
            </div>

            <div className='form-group mb-3'>
              <label htmlFor=''>Enable Button : </label>
              <div className='row'>
                <div className='col-6'>
                  <input
                    type='radio'
                    id='true'
                    name='EnableButton'
                    checked={button === 1}
                    value={button}
                    onChange={(e) => {
                      SetButton(1);
                    }}
                  />
                  <label htmlFor='true'>True</label>
                </div>
                <div className='col-6'>
                  <input
                    type='radio'
                    id='false'
                    name='EnableButton'
                    checked={button === 0}
                    value={button}
                    onChange={(e) => {
                      SetButton(0);
                    }}
                  />
                  <label htmlFor='false'>False</label>
                </div>
              </div>
            </div>

            {button === 1 && (
              <div>
                <div className='form-group mb-3'>
                  <label htmlFor='button-text'>Button Text : </label>
                  <input
                    type='text'
                    id='button-text'
                    name='ButtonText'
                    className='form-control'
                    placeholder='Enter button text'
                    value={button_text}
                    onChange={(e) => {
                      SetButtonText(e.target.value);
                    }}
                  />
                </div>

                <div className='form-group mb-3'>
                  <label htmlFor='button-action-url'>
                    Button Action URL :{' '}
                  </label>
                  <input
                    type='text'
                    id='button-action-url'
                    name='ButtonActionUrl'
                    className='form-control'
                    placeholder='Enter button action url'
                    value={button_action_url}
                    onChange={(e) => {
                      SetButtonActionUrl(e.target.value);
                    }}
                  />
                </div>
              </div>
            )}

            <div className='form-group'>
              <input
                type='submit'
                className='btn btn-block btn-success'
                value='Save Changes'
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default EditBanners;