import React, { FC } from 'react';
import classNames from 'classnames';
import { BadgeProps } from './models.d';

const Badge: FC<BadgeProps> = ({ children, customClass }) => {
  const BadgeClasses = classNames('tag', 'is-link', 'is-light', customClass);

  return (
    <span className={BadgeClasses}>{children}</span>
  );
};

export default Badge;
