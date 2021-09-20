import React, { useState } from 'react';

import Card from '../molecules/Card';
import Cart from '../organisms/Cart';
import Header from '../organisms/Header';

import { CartItemProps } from '../atoms/CartItem/models.d';
import './Home.scss';
import 'bulma/css/bulma.css';
import data from '../data/data';

const Home = () => {
  const [itemsInCart, setItemsInCart] = useState<CartItemProps[]>([]);

  const [filteredData, setFilteredData] = useState(data);

  const filterData = (value: string) => {
    const newData = value === ''
      ? data : data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(newData);
  };

  const addToCart = (index: number) => setItemsInCart(
    (prevState) => [...prevState, filteredData[index]],
  );
  const removeFromCart = (itemIndex: number) => setItemsInCart(
    (prevState) => prevState.filter((element, index) => index !== itemIndex),
  );

  const renderCards = filteredData.map(({ image, title, price }, index) => (
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
      <Header onSubmit={(value) => filterData(value)} />
      <div className="container home__container">
        <div className="home__grid">
          {renderCards}
        </div>
        <Cart items={mappedItemsInCart} />
      </div>
    </div>
  );
};

export default Home;
