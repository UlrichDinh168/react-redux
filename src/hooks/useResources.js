import { useState, useEffect } from 'react';
import jsonplaceholder from './jsonplaceholder';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  // eslint-disable-next-line no-shadow
  const fetchResource = async (resource) => {
    const response = await jsonplaceholder.get(`/${resource}`);
    setResources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
