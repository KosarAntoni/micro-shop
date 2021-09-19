import React, { FC } from 'react';
import classNames from 'classnames';
import { ButtonProps } from './models.d';

const Button: FC<ButtonProps> = ({
  children, onClick, outlined, customClass,
}) => {
  const ButtonClasses = classNames('button', 'is-link', 'is-rounded', { 'is-outlined': outlined }, customClass);

  return (
    <button className={ButtonClasses} type="button" onClick={onClick}>{children}</button>
  );
};

export default Button;
