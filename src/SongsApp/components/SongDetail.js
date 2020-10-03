/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="ui card">
        <div className="content">
          <div className="ui comments center aligned container">
            Please select a song
          </div>
        </div>
      </div>
    );
  }

  const { title, duration } = song;

  return (
    <div className="ui card">
      <div className="content">
        <a href="/" className="header">{title}</a>
      </div>
      <div className="extra content">
        <p>Duration: {duration}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
