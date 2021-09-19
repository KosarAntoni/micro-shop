import React from 'react';

import 'bulma/css/bulma.css';
import Card from '../molecules/Card';
import data from '../data/data';

import './Home.scss';
import Cart from '../molecules/Cart';

const Home = () => {
  const renderCards = data.map((item) => (
    <Card
      image={item.image}
      title={item.title}
      price={item.price}
      button="click"
      onClick={() => console.log('click')}
    />
  ));

  const itemsInCart = data.map((item) => ({
    title: item.title,
    price: item.price,
  }));
  return (
    <div className="home">
      <div className="home__grid">
        {renderCards}
      </div>
      <Cart items={itemsInCart} />
    </div>
  );
};

export default Home;
