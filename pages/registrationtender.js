import React from 'react';
import Router from 'next/router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { commitTender } from '../actions/tenderActions';

import Layout from '../components/Layout';
import TenderRegistration from '../components/TenderRegistration';

const TenderRegistrationPage = ({ commitTender, form }) => {
  const submit = e => {
    e.preventDefault();
    commitTender(form.TenderRegistrationForm.values);
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

const mapDispatchToProps = dispatch => ({
  commitTender: bindActionCreators(commitTender, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TenderRegistrationPage);
