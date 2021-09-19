import React, { FC } from 'react';
import Heading from '../../atoms/Heading';
import { CartProps, ItemType } from './models.d';
import CartItem from '../../atoms/CartItem';

const Cart: FC<CartProps> = ({ items }) => {
  const renderCartItems = items.map(({ title, price }: ItemType) => (
    <CartItem
      title={title}
      price={price}
    />
  ));

  return (
    <article className="panel is-link">
      <Heading customClass="panel-heading">
        Cart
      </Heading>
      <div className="panel-block">
        <CartItem title="Price" price={123} />
      </div>
      <ul className="panel-block is-flex is-flex-direction-column">
        <Heading small customClass="is-align-self-flex-start">
          Your cart:
        </Heading>
        {renderCartItems}
      </ul>
      <div className="panel-block">
        <input className="input is-link" type="text" placeholder="Search" />
      </div>
    </article>
  );
};

export default Cart;
