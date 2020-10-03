// Action creator
export const selectSongAction = (song) => {
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
