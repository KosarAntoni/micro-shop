import React, { FC } from 'react';
import classNames from 'classnames';
import { CartItemProps } from './models.d';

import './CartItem.scss';
import Button from '../Button';

const CartItem: FC<CartItemProps> = ({
  title, price, isListItem, onRemove = () => {
  }, customClass,
}) => {
  const CartItemClasses = classNames('cart-item', customClass);

  const renderCartItemContent = (
    <>
      <p>{`${title}: `}</p>
      <strong>
        {`${price} zł`}
      </strong>
    </>
  );

  const renderButton = onRemove
        && <Button onClick={onRemove} customClass="is-small is-inverted">&#10005;</Button>;

  const renderCartItem = isListItem ? (
    <li className={CartItemClasses}>
      {renderCartItemContent}
      {renderButton}
    </li>
  ) : (
    <div className={CartItemClasses}>
      {renderCartItemContent}
    </div>
  );

  return renderCartItem;
};

export default CartItem;
