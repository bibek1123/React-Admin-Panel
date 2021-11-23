import React, { useEffect } from 'react';

import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {blogsList} from '../../redux/actions/BlogsActions'

const Blogs = () => {
  
  const dispatch = useDispatch()
  const blog = useSelector( state => state.blogsList )
  const {blogs} = blog

  useEffect(() => {
     dispatch(blogsList())
  }, [dispatch]);

  return (
    <div className='container py-3 pb-5'>
      <div className='row'>
        <div className='col-lg-2 offset-lg-10 offset-9 align-end col-3 mb-3'>
          <Link className='btn d-block btn-block btn-success' to='/add-blog'>
            Add a Blog
          </Link>
        </div>
      </div>
      <div className='banners-cards row'>
        {blogs?.map((blog, index) => {
          return <BlogCard key={index} data={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blogs;
