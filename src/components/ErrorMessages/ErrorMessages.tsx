import React from 'react';
import styles from './ErrorMessages.module.css';
import { useAppSelector } from '../../store/hooks';

type AppProps = {
  children: string;
  classTitle?: string;
};

const ErrorMessages = ({ children, classTitle }: AppProps) => {
  const isdayModeActive = useAppSelector((state) => state.movies.dayMode);

  return (
    <React.Fragment>
      {classTitle && <p className={classTitle}>{children}</p>}
      {!classTitle && (
        <div className={styles.ErrorTextWrapper}>
          <p
            style={{
              color: !classTitle && isdayModeActive ? 'black' : 'white',
            }}
          >
            {children}
          </p>
        </div>
      )}
    </React.Fragment>
  );
};

export default ErrorMessages;
