import React, { FC } from 'react';
import './Header.scss';
import Form from '../Form';
import { HeaderProps } from './models.d';

const Header: FC<HeaderProps> = ({ onSubmit }) => (
  <div className="container header">
    <div className="notification is-link is-light">
      <Form button="search" placeholder="search" onSubmit={onSubmit} />
    </div>
  </div>
);

export default Header;
