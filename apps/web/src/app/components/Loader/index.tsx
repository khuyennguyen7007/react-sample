import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './style.module.scss';

export const Loader = () => {
    return (
      <div className={styles.container}>
        <CircularProgress color="secondary"/>
      </div>
    );
}
