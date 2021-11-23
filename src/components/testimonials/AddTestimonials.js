import React, { useState } from 'react';

const AddTestimonial = () => {
  const [testimonial_image, SetTestimonialImage] = useState('');
  const [testimonial_text, SetTestimonialText] = useState('');
  const [testimonial_author, SetTestimonialAuthor] = useState('');
  const [author_post, SetAuthorPost] = useState('');

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
          action={'https://www.test.pinsoutinnovation.com/testimonials'}
          className='card p-3 mt-4'
        >
          <fieldset>
            <div className='form-group mb-3'>
              <label htmlFor='img-file' className='form-label'>
                Testimonial Image :
              </label>
              <input
                className='form-control'
                type='file'
                id='img-file'
                name='TestimonialImage'
                accept='image/png, image/jpeg'
                onChange={(e) => {
                  handleChange(e);
                  SetTestimonialImage(e.target.value);
                }}
              />
            </div>

            <div className='py-3'>
              <img
                src={uploadedImage}
                alt=''
                width='100%'
                height='300px'
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='testitext'>Edit Testimonial Text : </label>
              <textarea
                name='TestimonialText'
                id='testitext'
                className='form-control'
                placeholder='Edit Testimonial Text'
                value={testimonial_text}
                onChange={(e) => {
                  SetTestimonialText(e.target.value);
                }}
              ></textarea>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='testiauthor'>Edit Testimonial Author : </label>
              <input
                name='TestimonialAuthor'
                type='text'
                id='testiauthor'
                className='form-control'
                placeholder='Edit Testimonial Author'
                value={testimonial_author}
                onChange={(e) => {
                  SetTestimonialAuthor(e.target.value);
                }}
              />
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='authorpost'>Edit Author Post : </label>
              <input
                name='AuthorPost'
                type='text'
                id='authorpost'
                className='form-control'
                placeholder='Edit Author Post'
                value={author_post}
                onChange={(e) => {
                  SetAuthorPost(e.target.value);
                }}
              />
            </div>

            <div className='form-group'>
              <input
                type='submit'
                className='btn btn-block btn-success'
                value='Add Testimonial'
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddTestimonial;
