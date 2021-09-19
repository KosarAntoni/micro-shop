import React, { FC } from 'react';
import Heading from '../../atoms/Heading';
import Badge from '../../atoms/Badge';
import { CardProps } from './models.d';
import Button from '../../atoms/Button';

const Card: FC<CardProps> = ({
  image, title, price, onClick, button,
}) => {
  const { imageData, altText } = image;
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img
            src={imageData}
            alt={altText}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content is-flex is-flex-direction-column is-justify-content-center">
          <Heading small>{title}</Heading>
          <Badge customClass="is-align-self-flex-start mb-2">
            {`${price} zł`}
          </Badge>
          <Button onClick={onClick} customClass="is-align-self-center">{button}</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
