import React from 'react';
import PropTypes from 'prop-types';

const seasonConfig = {
  winter: {
    iconName: 'snowflake outline',
    text: 'It is rather cold, isn\'t it?',
  },
  summer: {
    iconName: 'sun outline',
    text: 'It\'s super hot!',
  },
};

const winterOrSummer = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};

const GeoDisplay = (props) => {
  const { lat } = props;
  const season = winterOrSummer(lat, new Date().getMonth());

  return (
    <div className="ui container">
      <h1>
        {seasonConfig[season].text}
        <i className={`icon ${seasonConfig[season].iconName}`} />
      </h1>
    </div>
  );
};

GeoDisplay.propTypes = {
  lat: PropTypes.number.isRequired,
};

export default GeoDisplay;
