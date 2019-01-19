import React from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import { bindActionCreators } from 'redux';

import { getPhotos } from '../../actions/userActions';

import IndexPage from '../../components/IndexPage';

import style from './home.module.scss';

const Home = ({ page, getPhoto }) => (
  <div className={style.app}>
    <header>
      <h1>Мой топ фото</h1>
    </header>
    <IndexPage
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
