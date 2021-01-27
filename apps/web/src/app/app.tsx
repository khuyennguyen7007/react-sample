import React, { lazy, useEffect, useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { useLocale } from '@web/services/i18n/hooks/use-locale';

const Container = lazy(() => import('@web/components/Container').then(({Container}) => ({ default: Container})));

export default function App() {
  useLocale();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    async function initialize() {
      await new Promise(resolve => {
        setTimeout(() => resolve(), 1000);
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
      <CssBaseline/>
      {isLoading ? null : <Container/>}
    </React.Fragment>
  );
}
