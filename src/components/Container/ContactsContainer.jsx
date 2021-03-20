import React from 'react';
import s from './Container.module.css';

const Container = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.childContainer}>{children}</div>
    </div>
  );
}

export default Container;
