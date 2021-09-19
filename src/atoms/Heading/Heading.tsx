import React, { FC } from 'react';
import classNames from 'classnames';
import { HeadingProps } from './models.d';

const Heading: FC<HeadingProps> = ({ children, small, customClass = false }) => {
  const HeadingClasses = classNames('title', { 'is-4': !small }, { 'is-6': small }, customClass);
  return (
    <h1 className={HeadingClasses}>{children}</h1>
  );
};

export default Heading;
