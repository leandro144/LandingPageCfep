import React from 'react';
import PropTypes from 'prop-types';
import images from '../assets/images';

const PartnerImage = ({ imageKeys }) => {
  return (
    <div className="image-container">
      {imageKeys.map((key) => (
        <div key={key} className="image-card">
          <img src={images[key]} alt={key} />
        </div>
      ))}
    </div>
  );
};

PartnerImage.propTypes = {
  imageKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PartnerImage;
