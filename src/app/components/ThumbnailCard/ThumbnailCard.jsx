import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThumbnailCardCSS from './ThumbnailCard.css';

const ThumbnailCard = ({title, subtitle, image, href}) => (
    <div className="thumbnail-container" key={title}>
        <a className="thumbnail-href-image" href={href}><img className="thumbnail-image" src={image} /></a>
        <a className="thumbnail-href-title" href={href}><div className="thumbnail-title">{title}</div></a>
        <div className="thumbnail-subtitle">{subtitle}</div>        
    </div>
  );

ThumbnailCard.propTypes = {
    title: PropTypes.string.isRequired, 
    subtitle: PropTypes.string, 
    image: PropTypes.string.isRequired,
    linkTo: PropTypes.string,
    href: PropTypes.string,
}

ThumbnailCard.defaultProps = {
    subtitle: null,
    linkTo: null,
    href: null,
}

export default ThumbnailCard;