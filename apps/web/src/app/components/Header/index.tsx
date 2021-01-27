import React, { lazy } from 'react';

const Navigation = lazy(() => import('@web/components/Navigation').then(({Navigation}) => ({default: Navigation})));
export const Header = () => (
  <Navigation/>
);
