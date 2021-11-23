import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {webcontentsList} from '../../redux/actions/WebcontentsActions'

const WebsiteContents = () => {
  

  const dispatch = useDispatch()
  const webcontentssList = useSelector( state => state.webcontentsList )
  const { webcontents } = webcontentssList

  useEffect(() => {
    dispatch( webcontentsList() )
  }, [ dispatch ] );
  
  return (
    <div className='row mb-5 px-4'>
      <div className=''>
        <table className='table table-hover table-striped'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Field Name</th>
              <th scope='col'>Field Data</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {webcontents?.map((content, index) => {
              return (
                <tr className='align-items-center' key={index}>
                  <th scope='row'>{content.id}</th>
                  <td>
                    <strong>{content.field_name}</strong>
                  </td>
                  <td>{content.field_data}</td>
                  <td>
                    <Link
                      to={'/edit-website-content/' + content.id}
                      className='btn btn-sm px-4 btn-warning'
                    >
                      <i className='fas fa-edit'></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WebsiteContents;
