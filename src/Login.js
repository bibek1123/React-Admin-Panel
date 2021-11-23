import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('https://www.test.pinsoutinnovation.com/login', {
      username: username,
      password: password,
    }).then((res) => {
      // console.log(res.data);
      if (Object.keys(res.data).length === 1) {
        alert(res.data.msg);
      } else {
        if (res.data.logIn === true) {
          sessionStorage.setItem('loggedIn', true);
          sessionStorage.setItem('token', res.data.token);
          history.push(`/`);
        } else if (res.data.logIn === false) {
          alert(res.data.msg);
        }
      }
    });
  };

  return (
    <section className='vh-100 d-flex flex-column align-items-center justify-content-center'>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-md-9 col-lg-6 col-xl-5'>
            <img
              src='https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png'
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 py-5'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className=''>
                <h2 className='mb-0 me-3 text-center'>Login Now</h2>
                <hr />
                <div className='form-outline mb-4'>
                  <label className='form-label' htmlFor='username'>
                    <h5>Username : </h5>
                  </label>
                  <input
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className='form-control form-control-lg'
                    placeholder='Enter a username'
                  />
                </div>

                <div className='form-outline mb-3'>
                  <label className='form-label' htmlFor='password'>
                    <h5>Password : </h5>
                  </label>
                  <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className='form-control form-control-lg'
                    placeholder='Enter password'
                  />
                </div>

                <div className='text-center text-lg-start mt-4 pt-2'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-lg'
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
