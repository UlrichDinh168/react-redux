import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectSongAction } from '../actions';

class SongList extends React.Component {
  renderList() {
    const { songs, selectSong } = this.props;
    return songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              type="submit"
              className="ui button primary"
              onClick={() => selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

SongList.propTypes = {
  songs: PropTypes.array.isRequired,
  selectSong: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong: selectSongAction,
})(SongList);
