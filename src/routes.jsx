import React from 'react';
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import ErrorPage from './components/pages/ErrorPage';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/:title',
    element: <Project />,
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
];

export default routes;