import React from 'react';
import { UPLOAD_PAGE, USER_PAGE } from '@web/config/routes';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={UPLOAD_PAGE}> Upload </Link>
        </li>
        <li>
          <Link to={USER_PAGE}> Users </Link>
        </li>
      </ul>
    </div>
  )
}
