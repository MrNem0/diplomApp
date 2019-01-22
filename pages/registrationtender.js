import React from 'react';
import Router from 'next/router';

import { connect } from 'react-redux';

import Axios from 'axios';
import Layout from '../components/Layout';
import TenderRegistration from '../components/TenderRegistration';

const TenderRegistrationPage = ({ form }) => {
  const submit = e => {
    e.preventDefault();
    Axios.post('/tender/register', form.TenderRegistrationForm.values)
      .then(r => r.data)
      .then(d => d)
      .catch(error => console.log(error));
    Router.replace('/tenders');
  };

  return (
    <Layout>
      <TenderRegistration handleSubmit={submit} />
    </Layout>
  );
};

const mapStateToProps = store => ({
  form: store.form
});

export default connect(
  mapStateToProps
)(TenderRegistrationPage);
