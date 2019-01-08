import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import { bindActionCreators } from 'redux';

import { getPhotos } from '../../actions/PageActions';

import Page from '../../components/Page';
import User from '../../components/User';

import style from './home.module.scss';

const Home = ({ user, page, getPhoto }) => (
  <div className={style.app}>
    <header>
      <h1>Мой топ фото</h1>
    </header>
    <User name={user.name} />
    <Page
      year={+page.year}
      photos={page.photos}
      getPhotos={getPhoto}
      isFetching={page.isFetching}
    />
  </div>
);

Home.propTypes = {
  user: array.isRequired,
  page: array.isRequired,
  getPhoto: func.isRequired
};

const mapStateToProps = store => ({
  user: store.user,
  page: store.page
});

const mapDispatchToProps = dispatch => ({
  getPhoto: bindActionCreators(getPhotos, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
