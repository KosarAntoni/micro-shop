import React, { FC } from 'react';
import classNames from 'classnames';
import { ButtonProps } from './models.d';

const Button: FC<ButtonProps> = ({
  children, onClick, type = 'button', outlined, customClass,
}) => {
  const ButtonClasses = classNames('button', 'is-link', 'is-rounded', { 'is-outlined': outlined }, customClass);

  return (
  // eslint-disable-next-line react/button-has-type
    <button className={ButtonClasses} type={type} onClick={onClick}>{children}</button>
  );
};

export default Button;
