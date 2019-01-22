import React from 'react';

import { connect } from 'react-redux';
import Axios from 'axios';
import Router from 'next/dist/lib/router';
import SignInPage from '../components/SignInPage';
import Layout from '../components/Layout';

const Auth = ({ form }) => {
  let res;
  const submit = e => {
    e.preventDefault();
    Axios.post('/users/authenticate', form.AuthForm.values)
      .then(r => r.data)
      .then(d => {
        if (d.token) {
          localStorage.setItem('user', JSON.stringify(d));
        }
        return d;
      })
      .catch(e => console.log(e));
    window.location.reload();
    window.location.replace('/');
  };
  return (
    <Layout>
      <SignInPage handleSubmit={submit} />
    </Layout>
  );
};

const mapStateToProps = store => ({
  form: store.form
});

export default connect(mapStateToProps)(Auth);
