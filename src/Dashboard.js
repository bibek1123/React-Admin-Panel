import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import MyNavbar from './components/navbar/MyNavbar';
import Sidebar from './components/sidebar/Sidebar';
import Banners from './components/banners/Banners';
import AddBanner from './components/banners/AddBanner';
import EditBanner from './components/banners/EditBanner';
import EditTestimonials from './components/testimonials/EditTestimonials';
import Testimonials from './components/testimonials/Testimonials';
import AddTestimonial from './components/testimonials/AddTestimonials';
import Blogs from './components/blogs/Blogs';
import EditBlogs from './components/blogs/EditBlog';
import AddBlog from './components/blogs/AddBlog';
import News from './components/news/News';
import AddNews from './components/news/AddNews';
import Partners from './components/partners/Partners';
import AddPartners from './components/partners/AddPartner';
import Ads from './components/advertisements/Ads';
import AddAds from './components/advertisements/AddAds';
import ShowcaseImages from './components/showcaseimage/ShowcaseImages';
import AddShowcaseImages from './components/showcaseimage/AddShowcaseImage';
import WebsiteContents from './components/websiteContents/WebsiteContents';
import EditWebsiteContent from './components/websiteContents/EditWebsiteContent';

const Dashboard = () => {
  return (
    <div>
      <div className='wrapper-all'>
        <Sidebar />
        <div className='main'>
          <MyNavbar />
          <div className='main-content container'>
            <Switch>
              <Route exact path='/banners'>
                <Banners />
              </Route>
              <Route path='/edit-banner/:id' component={EditBanner}></Route>
              <Route exact path='/add-banner'>
                <AddBanner />
              </Route>
              <Route exact path='/testimonials'>
                <Testimonials />
              </Route>
              <Route
                path='/edit-testimonial/:id'
                component={EditTestimonials}
              ></Route>
              <Route exact path='/add-testimonial'>
                <AddTestimonial />
              </Route>
              <Route exact path='/blogs'>
                <Blogs />
              </Route>
              <Route path='/edit-blog/:id' component={EditBlogs}></Route>
              <Route exact path='/add-blog'>
                <AddBlog />
              </Route>
              <Route path='/courses'></Route>
              <Route exact path='/news'>
                <News />
              </Route>
              <Route exact path='/add-news'>
                <AddNews />
              </Route>
              <Route exact path='/partners'>
                <Partners />
              </Route>
              <Route exact path='/add-partners'>
                <AddPartners />
              </Route>
              <Route exact path='/ads'>
                <Ads />
              </Route>
              <Route exact path='/add-ads'>
                <AddAds />
              </Route>
              <Route exact path='/showcaseimages'>
                <ShowcaseImages />
              </Route>
              <Route exact path='/add-showcaseimages'>
                <AddShowcaseImages />
              </Route>
              <Route exact path='/websitecontent' component={WebsiteContents}>
                
              </Route>
              <Route
                exact
                path='/edit-website-content/:id'
                component={EditWebsiteContent}
              ></Route>
              
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);
