import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ReactQuill from 'react-quill';

const EditBlogs = (props) => {
  const [blog_bg, SetBlogBG] = useState('');
  const [blog_title, SetBlogTitle] = useState('');
  const [blog_content, SetBlogContent] = useState('');
  const [blog_tag, SetBlogTag] = useState('');
  const [blog_author, SetBlogAuthor] = useState('');

  useEffect(() => {
    Axios.get(
      'https://www.test.pinsoutinnovation.com/blogs/' + props.match.params.id
    ).then((res) => {
      // console.log(res.data);
      SetBlogBG(res.data.data.blog_bg);
      setUploadedImage(
        'https://www.test.pinsoutinnovation.com/uploaded-images/' +
          res.data.data.blog_bg
      );
      SetBlogTitle(res.data.data.blog_title);
      SetBlogContent(res.data.data.blog_content);
      SetBlogTag(res.data.data.blog_tag);
      SetBlogAuthor(res.data.data.blog_author);
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

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video', 'code-block'],
      ['clean'],
    ],
  };
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <div className='row mb-5'>
      <div className='col-lg-6 offset-lg-3 col-sm-8 offset-sm-2'>
        <form
          method='POST'
          encType='multipart/form-data'
          action={
            'https://www.test.pinsoutinnovation.com/blogs/' +
            props.match.params.id
          }
          className='card p-3 mt-4'
        >
          <fieldset>
            <div className='form-group mb-3'>
              <label htmlFor='img-file' className='form-label'>
                Blog Image :
              </label>
              <input
                className='form-control'
                type='file'
                id='img-file'
                name='BlogImage'
                accept='image/png, image/jpeg'
                onChange={(e) => {
                  handleChange(e);
                  SetBlogBG(e.target.value);
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
              <label htmlFor='blog-title'>Edit Blog Title : </label>
              <input
                name='BlogTitle'
                type='text'
                id='blog-title'
                className='form-control'
                placeholder='Edit Blog Title'
                value={blog_title}
                onChange={(e) => {
                  SetBlogTitle(e.target.value);
                }}
              />
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='blog-content'>Edit Blog Content : </label>
              <ReactQuill
                id='BlogContent'
                modules={modules}
                formats={formats}
                value={blog_content}
                onChange={(delta) => {
                  SetBlogContent(delta);
                }}
              />
              <input
                type='hidden'
                name='BlogContent'
                value={blog_content}
              ></input>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='blog-tag'>Edit Blog Tag : </label>
              <input
                name='BlogTag'
                type='text'
                id='blog-tag'
                className='form-control'
                placeholder='Edit Blog Tag'
                value={blog_tag}
                onChange={(e) => {
                  SetBlogTag(e.target.value);
                }}
              />
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='blog-author'>Edit Blog Author: </label>
              <input
                name='BlogAuthor'
                type='text'
                id='blog-author'
                className='form-control'
                placeholder='Edit Blog Author'
                value={blog_author}
                onChange={(e) => {
                  SetBlogAuthor(e.target.value);
                }}
              />
            </div>

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

export default EditBlogs;