import React from 'react';
import { number, array, func, bool } from 'prop-types';

import Button from '@material-ui/core/Button';

const Page = ({ getPhotos, year, photos, isFetching }) => {
  const onBtnClick = e => {
    const thisYear = e.target.textContent;
    getPhotos(thisYear);
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={onBtnClick}>
        2019
      </Button>{' '}
      <Button variant="contained" color="primary" onClick={onBtnClick}>
        2018
      </Button>{' '}
      <Button variant="contained" color="primary" onClick={onBtnClick}>
        2017
      </Button>{' '}
      <Button variant="contained" color="primary" onClick={onBtnClick}>
        2016
      </Button>{' '}
      {!isFetching ? (
        <p>
          У тебя {photos.length} фото за {year} год
        </p>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

Page.propTypes = {
  year: number.isRequired,
  photos: array.isRequired,
  getPhotos: func.isRequired,
  isFetching: bool.isRequired
};

export default Page;
