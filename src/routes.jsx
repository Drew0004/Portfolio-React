import React from 'react';
import Home from './components/pages/Home';
import Project from './components/pages/Project';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/:title',
    element: <Project />,
  },
];

export default routes;