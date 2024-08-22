import React from 'react';
import DetailPage from '../pages/DetailPage';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ auth }) => {
  return auth ? <DetailPage /> : <Navigate to='/login' />;
};

export default PrivateRoute;
