import React, { FC, useState } from 'react';
import Heading from '../../atoms/Heading';
import { CartProps, ItemType } from './models.d';
import CartItem from '../../atoms/CartItem';
import './Cart.scss';
import Form from '../Form';

const Cart: FC<CartProps> = ({ items }) => {
  const discounts = [
    {
      key: 'SOBRE_10', value: 10,
    }, {
      key: 'SOBRE_20', value: 20,
    }, {
      key: 'SOBRE_30', value: 10,
    },
  ];

  const [currentDiscount, setCurrentDiscount] = useState<number>(0);
  const checkDiscount = (value: string) => {
    const discount = discounts.filter((item) => item.key === value);
    setCurrentDiscount((prevState) => discount[0]?.value || prevState);
  };

  const wholePrice = items.length
    ? (items.map((item) => item.price).reduce((a, b) => a + b) / 100)
        * (100 - currentDiscount) : 0;

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
        <Form
          button="Enter"
          placeholder="discount code"
          onSubmit={(value) => checkDiscount(value)}
        />
      </div>
    </article>
  );
};

export default Cart;
