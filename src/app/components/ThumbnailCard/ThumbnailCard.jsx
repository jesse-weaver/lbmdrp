import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ThumbnailCardCSS from './ThumbnailCard.css';

const ThumbnailCard = ({ title, subtitle, image, href, linkTo }) => (
  <div className="thumbnail-container" key={title}>
    {linkTo && (
      <Fragment>
        <Link className="thumbnail-href-image" to={linkTo}>
          <img className="thumbnail-image" src={image} alt={title} />
        </Link>
        <Link className="thumbnail-href-title" to={linkTo}>
          <div className="thumbnail-title">{title}</div>
        </Link>
      </Fragment>
    )}
    {href && (
      <Fragment>
        <a className="thumbnail-href-image" href={href}>
          <img className="thumbnail-image" src={image} alt={title} />
        </a>
        <a className="thumbnail-href-title" href={href}>
          <div className="thumbnail-title">{title}</div>
        </a>
      </Fragment>
    )}
    <div className="thumbnail-subtitle">{subtitle}</div>
  </div>
);

ThumbnailCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  href: PropTypes.string,
};

ThumbnailCard.defaultProps = {
  subtitle: null,
  linkTo: null,
  href: null,
};

export default ThumbnailCard;
