import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function AddPartners() {
  const [partners_image, setPartnersImg] = useState('');
  
  let history = useHistory();
  const handleRoute = () => {
    history.push("/partners");
  }
  function submitForm(contentType, data, setResponse) {
    axios({
      url: `https://www.test.pinsoutinnovation.com/partners`,
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': contentType,
      },
    })
      .then((res) => {
        setResponse(res.data);
        if(res.status===201){
          handleRoute();
        }
      })
      .catch((error) => {
        setResponse('error');
      });
  }

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

  function uploadWithFormData() {
    const formData = new FormData();
    formData.append('PartnerImage', partners_image);
    submitForm('multipart/form-data', formData, (msg) => console.log(msg));
  }

  return (
    <div className='row'>
      <div className='col-lg-6 offset-lg-3 col-sm-8 offset-sm-2'>
        <form
          className='card p-3 mt-4'
          onSubmit={(e) => {
            e.preventDefault();
            uploadWithFormData();
          }}
        >
          <fieldset>
            <div className='form-group mb-3'>
              <label htmlFor='img-file' className='form-label'>
                Partners Image :
              </label>
              <input
                className='form-control'
                type='file'
                id='img-file'
                name='PartnerImage'
                // value={partners_image}
                accept='image/png, image/jpeg'
                onChange={(e) => {
                  handleChange(e);
                  setPartnersImg(e.target.files[0]);
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

            <div className='row text-center'>
              <div className='form-group'>
                <input
                  type='submit'
                  className='btn btn-block btn-success'
                  value='Add Banner'
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default AddPartners;
