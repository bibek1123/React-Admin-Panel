import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarClass, SetSideBarClass] = useState('sidebar');
  const [iconClass, SetIconClass] = useState('fas fa-chevron-right text-white');

  const toggleSiderBar = () => {
    if (sidebarClass === 'sidebar') {
      SetSideBarClass('sidebar show-sidebar');
      SetIconClass('fas fa-chevron-left text-white');
    } else {
      SetSideBarClass('sidebar');
      SetIconClass('fas fa-chevron-right text-white');
    }
  };
  return (
    <div className={sidebarClass}>
      <div className='container pb-3'>
        <div className='top'>
          <div id='sidebar-toggle-btn' className='sidebar-toggle-btn'>
            <button
              className='btn'
              onClick={() => {
                toggleSiderBar();
              }}
            >
              <i className={iconClass}></i>
            </button>
          </div>

          <h2 className='sidebar-title pb-3'>
            <div className='brand-img'>
              <img src='/main-icon.png' alt='' />
            </div>
          </h2>

          <div className='sidebar-content mt-5'>
            <ul className='list-group'>
              <Link to='/'>
                <li className='list-group-item'>Dashboard</li>
              </Link>
              <Link to='/banners'>
                <li className='list-group-item'>Banners</li>
              </Link>
              <Link to='/testimonials'>
                <li className='list-group-item'>Testimonials</li>
              </Link>
              <Link to='/blogs'>
                <li className='list-group-item'>Blogs</li>
              </Link>
              <Link to='/news'>
                <li className='list-group-item'>News</li>
              </Link>
              <Link to='/partners'>
                <li className='list-group-item'>Partners</li>
              </Link>
              <Link to='/ads'>
                <li className='list-group-item'>Ads</li>
              </Link>
              <Link to='/showcaseimages'>
                <li className='list-group-item'>ShowcaseImages</li>
              </Link>
              <Link to='/websitecontent'>
                <li className='list-group-item'>Website Content</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='sidebar-storage-section p-3'>
          <h3 className='d-flex justify-content-between align-items-center'>
            <span className='storage-heading'>Storage</span>
            <span className='upgrade-heading'>Upgrade</span>
          </h3>
          <p className='storage-text'>
            <span className='storage-used'>3.4GB</span> of 15GB
          </p>
          <div className='storage-bar-container'>
            <div className='storage-bar bg-white'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
