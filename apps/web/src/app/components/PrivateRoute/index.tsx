import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '@web/services/auth/hooks/use-auth.';

export function PrivateRoute({children, ...rest}) {
  const auth: Record<string, string> = useAuth();
  return (
    <Route
      {...rest}
      render={({location}) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}
