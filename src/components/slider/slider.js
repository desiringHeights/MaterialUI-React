import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SwiperCore, { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './slider.scss';

SwiperCore.use([Pagination, A11y]);


function Slider(props) {
  const {children, pagination, hidePaginationForMobile, onChange, onSwiper, sliderRef} = props;


  const renderContent = () => {
    return children.map((el, i) => <SwiperSlide key={i}>{el}</SwiperSlide>)
  };

  const sliderAttrs = {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      clickable: true,
      clickableClass: `slider-pagination ${hidePaginationForMobile && 'slider-pagination-hide'}`,
      bulletClass: 'slider-pagination-item',
      bulletActiveClass: 'slider-pagination-item-active'
    }
  };

  if (pagination) {
    sliderAttrs.pagination.renderBullet = (index, className) => {
      return `<span class="${className}">${pagination[index]}</span>`;
    }
  }

  if (onSwiper) {
    sliderAttrs.onSwiper = (swiper) => onSwiper(swiper);
  }

  if (onChange) {
    sliderAttrs.onSlideChange = (swiper) => onChange(swiper.snapIndex);
  }

  return (
    <Swiper {...sliderAttrs}>
      {renderContent()}
    </Swiper>
  );
}

Slider.defaultProps = {
  hidePaginationForMobile: false,
  pagination: null,
  onSwiper: null,
  onChange: null,
};

Slider.propTypes = {
  children: PropTypes.array.isRequired,
  hidePaginationForMobile: PropTypes.bool,
  pagination: PropTypes.array,
  onSwiper: PropTypes.func,
  onChange: PropTypes.func,
};

export default Slider;
