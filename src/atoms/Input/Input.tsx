import React, { FC } from 'react';
import classNames from 'classnames';
import { InputProps } from './models.d';

const Input: FC<InputProps> = ({ placeholder, customClass }) => {
  const inputClasses = classNames('input', 'is-link', customClass);
  return (
    <input className={inputClasses} type="text" placeholder={placeholder} />
  );
};

export default Input;
