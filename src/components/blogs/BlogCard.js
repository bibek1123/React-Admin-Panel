import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux'
import {blogsDelete} from '../../redux/actions/BlogsActions'

const BlogCard = ( props ) =>
{
  const dispatch = useDispatch()
  const blog = useSelector( state => state.blogsDelete )
  const {success} = blog
  const handleDelete = (id) =>
  {
    dispatch(blogsDelete(id))
    
  };

  useEffect( () =>
  {
    if ( success )
    {
      window.location.reload();
    }
  },[success])

  return (
    <div className='banner-card col-lg-4 col-md-6 my-4'>
      <div className='card'>
        <img
          className='card-img-top'
          src={
            'https://www.test.pinsoutinnovation.com/uploaded-images/' +
            props.data.blog_bg
          }
          alt=''
        />
        <div className='card-body'>
          <hr
            style={{
              marginTop: 0,
            }}
          />
          <div className='mb-3'>
            <h5 className='card-title sec'>Blog Title : </h5>
            <p className=''>{props.data.blog_title}</p>
          </div>
          <div className='mb-3'>
            <h5 className='card-title sec'>Blog Content : </h5>
            <p
              className='blogContent card p-3'
              style={{ height: '300px', overflowY: 'scroll' }}
            >
              {parse(props.data.blog_content)}
            </p>
          </div>
          <div className='mb-3'>
            <h5 className='card-title sec'>Blog Tag : </h5>
            <p className=''>{props.data.blog_tag}</p>
          </div>
          <div className='mb-3'>
            <h5 className='card-title sec'>Blog Author : </h5>
            <p className=''>{props.data.blog_author}</p>
          </div>
          <div className='mb-3'>
            <h5 className='card-title sec'>Blog Date : </h5>
            <p className=''>{props.data.blog_date}</p>
          </div>

          <div className='d-flex justify-content-between'>
            <Link
              to={'/edit-blog/' + props.data.id}
              className='btn btn-sm px-4 btn-warning'
            >
              <i className='fas fa-edit'></i>
            </Link>
            <button
              className='btn btn-danger btn-sm px-4'
              onClick={() => {
                handleDelete(props.data.id);
              }}
            >
              <i className='fas fa-trash'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
