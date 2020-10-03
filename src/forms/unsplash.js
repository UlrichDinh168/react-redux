import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID BWwSAL32EtJZ5cqel476VMGkJW9W7x1giqIy1TsHJWA',
  },
});

export default unsplash;
