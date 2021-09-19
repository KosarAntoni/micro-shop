import React, { FC } from 'react';
import Heading from '../../atoms/Heading';
import { CartProps, ItemType } from './models.d';
import CartItem from '../../atoms/CartItem';
import Input from '../../atoms/Input';
import './Cart.scss';

const Cart: FC<CartProps> = ({ items }) => {
  const wholePrice = items.length
    ? items.map((item) => item.price).reduce((a, b) => a + b) : 0;

  const renderCartItems = items.map(({ title, price, onRemove }: ItemType, index) => (
    <CartItem
      key={index}
      title={title}
      price={price}
      onRemove={onRemove}
      isListItem
    />
  ));

  return (
    <article className="cart panel is-link">
      <Heading customClass="panel-heading">
        Cart
      </Heading>
      <div className="panel-block">
        <CartItem title="Price" price={wholePrice} />
      </div>
      <ul className="panel-block is-flex is-flex-direction-column">
        <Heading small customClass="is-align-self-flex-start">
          Your cart:
        </Heading>
        {renderCartItems}
      </ul>
      <div className="panel-block">
        <Input placeholder="Discount code" />
      </div>
    </article>
  );
};

export default Cart;
