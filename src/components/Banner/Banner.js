import React from 'react';
import '../Banner/Banner.css';
import bannerImage from '../../assets/banner.png';

function Banner() {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner-imagem" />
    </div>
  );
}

export default Banner;
