import React, { FC } from 'react';
import Heading from '../../atoms/Heading';
import Badge from '../../atoms/Badge';
import { CardProps } from './models.d';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';

const Card: FC<CardProps> = ({
  image, title, price, onClick, button,
}) => (
  <div className="card">
    <Image {...image} />
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

export default Card;
