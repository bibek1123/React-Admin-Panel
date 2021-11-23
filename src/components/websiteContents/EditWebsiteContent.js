import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const EditWebsiteContent = (props) => {
  const [fieldName, setFieldName] = useState('');
  const [fieldData, setFieldData] = useState('');

  useEffect(() => {
    Axios.get(
      'https://www.test.pinsoutinnovation.com/websitecontents/' +
        props.match.params.id
    ).then((res) => {
      // console.log(res.data);
      setFieldName(res.data.data.field_name);
      setFieldData(res.data.data.field_data);
    });
  }, [props.match.params.id]);

  return (
    <div className='row mb-5'>
      <div className='col-lg-6 offset-lg-3 col-sm-8 offset-sm-2'>
        <form
          method='POST'
          encType='multipart/form-data'
          action={
            'https://www.test.pinsoutinnovation.com/websitecontents/' +
            props.match.params.id
          }
          className='card p-3 mt-4'
        >
          <fieldset>
            <div className='form-group mb-3'>
              <label htmlFor='field-data'>
                <strong>{fieldName}</strong>
              </label>
              <input
                type='text'
                name='field_data'
                id='field-data'
                className='form-control'
                placeholder='Edit Field Data'
                value={fieldData}
                onChange={(e) => {
                  setFieldData(e.target.value);
                }}
              ></input>
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

export default EditWebsiteContent;