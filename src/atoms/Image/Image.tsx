import React, { FC } from 'react';
import { ImageProps } from './models.d';
import './Image.scss';

const Image: FC<ImageProps> = ({ imageData, altText }) => (
  <div className="card-image">
    <figure className="image is-square">
      <img
        src={imageData}
        alt={altText}
      />
    </figure>
  </div>
);

export default Image;
