import React, { FC } from 'react';
import classNames from 'classnames';
import { CartItemProps } from './models.d';

import './CartItem.scss';

const CartItem: FC<CartItemProps> = ({
  title, price, isListItem, customClass,
}) => {
  const CartItemClasses = classNames('cart-item', 'is-flex', 'is-justify-content-space-between', customClass);

  const renderCartItemContent = (
    <>
      <p>{`${title}: `}</p>
      <strong>
        {`${price} zł`}
      </strong>
    </>
  );

  const renderCartItem = isListItem ? (
    <li className={CartItemClasses}>
      {renderCartItemContent}
    </li>
  ) : (
    <div className={CartItemClasses}>
      {renderCartItemContent}
    </div>
  );

  return renderCartItem;
};

export default CartItem;
