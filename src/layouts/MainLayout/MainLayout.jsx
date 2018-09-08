import React from 'react';
import PropTypes from 'prop-types';
// import Header from '../Header';

const MainLayout = ({ children }) => (
  <div>
    {/* <Header /> */}
    <div>{children}</div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;
