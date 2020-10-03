import React from 'react';
import PropTypes from 'prop-types';

import './ImageList.css';

import ImageCard from './ImageCard';

const ImageList = (props) => {
  const { images } = props;
  const imagesEl = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div className="image-list">{imagesEl}</div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageList;
