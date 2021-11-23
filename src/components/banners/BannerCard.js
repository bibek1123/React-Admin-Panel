import React,{useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import {bannerDelete} from '../../redux/actions/BannerActions'
import { useDispatch,useSelector  } from 'react-redux'

const BannerCard = ( props ) =>
{
  const dispatch = useDispatch()
  const history = useHistory()
  const bannerDel = useSelector( state => state.bannerDelete )
  const {success,error} = bannerDel
  const buttonStyles = {
    color: props.data.banner_bg_color,
    backgroundColor: props.data.banner_title_color,
  };

  useEffect( () =>
  {
    if ( success )
    {
      window.location.reload();
    }
    if ( error )
    {
      console.log("Something went wrong")
    }
  },[dispatch, success, error])

  const handleDelete = () => {
    dispatch(bannerDelete(props.data.id));
    history.push("/banners")
  };

  return (
    <div className='banner-card col-lg-4 col-md-6 my-4'>
      <div className='card'>
        <img
          className='card-img-top'
          src={
            'https://www.test.pinsoutinnovation.com/uploaded-images/' +
            props.data.banner_image
          }
          alt=''
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.data.title}</h5>
          <hr
            style={{
              marginTop: 0,
            }}
          />
          <div className='mb-3'>
            <h5 className='card-title sec'>Button properties</h5>
            <ul className='list-group'>
              <li className='list-group-item'>
                Show Button : {props.data.button === 1 ? 'True' : 'False'}
              </li>
              <li className='list-group-item'>
                Button Text Color : {props.data.banner_bg_color}
              </li>
              <li className='list-group-item'>
                Button Background Color : {props.data.banner_title_color}
              </li>
              <li className='list-group-item'>
                Button Text : {props.data.button_text}
              </li>
            </ul>
          </div>
          <div className='mb-3'>
            <h5 className='card-title sec'>Button Preview : </h5>
            <button className='btn' style={buttonStyles}>
              {props.data.button_text}
            </button>
          </div>
          <div className='d-flex justify-content-between'>
            <Link
              to={'/edit-banner/' + props.data.id}
              className='btn btn-sm px-4 btn-warning'
            >
              <i className='fas fa-edit'></i>
            </Link>
            <button
              className='btn btn-danger btn-sm px-4'
              onClick={() => {
                handleDelete();
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

export default BannerCard;
