import React from 'react';
import { string } from 'prop-types';

const User = ({ name }) => (
  <div className="ib user">
    <p>Привет, {name}!</p>
  </div>
);

User.propTypes = {
  name: string.isRequired
};

export default User;
