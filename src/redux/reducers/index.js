import { combineReducers } from "redux"
import { banner,bannerDelete } from './BannerReducers'
import { ads, adsDelete } from './AdsReducers'
import { blogs, blogsDelete } from './BlogsReducers'
import { news, newsDelete } from './NewsReducers'
import { partner, partnerDelete } from './PartnerReducers'
import { showcase,  showcaseDelete } from './ShowcaseReducers'
import { webcontents, } from './WebcontentsReducers'
import { testimonialList, testimonialDelete } from './TestimonialReducers'



export const rootReducer = combineReducers( {
    bannerList: banner,
   
    
    bannerDelete: bannerDelete,
    

    adsList: ads,
    adsDelete: adsDelete,

    blogsList: blogs,
    
    
    blogsDelete: blogsDelete,

    newsList: news,
  
    newsDelete: newsDelete,

    partnerList: partner,
   
    partnerDelete: partnerDelete,

    showcaseList: showcase,
 
    showcaseDelete: showcaseDelete,

    webcontentsList: webcontents,
    

    testimonialList,
    testimonialDelete,
 
    
    

} )

