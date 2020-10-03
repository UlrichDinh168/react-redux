import React from 'react';
import GeoDisplay from './GeoDisplay';
import Loader from './Loader';
import useLocation from './useLocation';

const Geo = () => {
  const [lat, err] = useLocation();

  let content;
  if (err) {
    content = (
      <div className="ui container negative message">
        <div className="header">
          An error occured
        </div>
        <p>You probably denied location access</p>
      </div>
    );
  } else if (lat) {
    content = <GeoDisplay lat={lat} />;
  } else {
    content = <Loader text="Please allow location access in your browser" />;
  }

  return content;
};

export default Geo;
