import { useState, useEffect } from 'react';

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.longitude),
      (error) => setErr(error.message),
    );
  }, []);

  return [lat, err];
};

export default useLocation;
