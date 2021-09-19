import React, { useState } from 'react';
import data from '../data/data';

import Card from '../molecules/Card';
import Cart from '../organisms/Cart';

import { CartItemProps } from '../atoms/CartItem/models.d';
import './Home.scss';
import 'bulma/css/bulma.css';

const Home = () => {
  const [itemsInCart, setItemsInCart] = useState<CartItemProps[]>([]);

  const addToCart = (index: number) => setItemsInCart((prevState) => [...prevState, data[index]]);
  const removeFromCart = (itemIndex: number) => setItemsInCart(
    (prevState) => prevState.filter((element, index) => index !== itemIndex),
  );

  const renderCards = data.map(({ image, title, price }, index) => (
    <Card
      key={title}
      image={image}
      title={title}
      price={price}
      button="Add to cart"
      onClick={() => addToCart(index)}
    />
  ));

  const mappedItemsInCart = itemsInCart.map(({ title, price }, index) => ({
    title,
    price,
    onRemove: () => removeFromCart(index),
  }));

  return (
    <div className="home">
      <div className="home__grid">
        {renderCards}
      </div>
      <Cart items={mappedItemsInCart} />
    </div>
  );
};

export default Home;
