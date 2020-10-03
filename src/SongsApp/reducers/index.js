import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Broken whisky glass', duration: '3:33' },
    { title: 'Show must go on', duration: '3:56' },
    { title: 'Unforgettable', duration: '4:03' },
  ];
};

const selectedSongReducer = (song = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return song;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
