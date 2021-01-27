import React, { lazy, Suspense, useEffect, useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { useLocale } from '@web/services/i18n/hooks/use-locale';
import { Loader } from './components/Loader';
import { useAxiosConfig } from '@web/utils/http';

const Container = lazy(() => import('@web/components/Container').then(({Container}) => ({ default: Container})));

export default function App() {
  useLocale();
  useAxiosConfig();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function initialize() {
      await new Promise(resolve => {
        setTimeout(() => resolve(null), 1000);
      })
      const el = document.querySelector('.loader-container');
      if (el) {
        el.remove();
      }
      setLoading(false);
    }
    initialize();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Suspense fallback={<Loader />}>
        {isLoading ? <Loader /> : <Container />}
      </Suspense>
    </React.Fragment>
  );
}
