import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const LoaderView = () => {
    return (
        <Loader
            className={s.loader}
            type="Grid"
            color="#181838"
            height={200}
            width={200}
            timeout={3000}
        />
  );
};

export default LoaderView;