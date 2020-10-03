import React from 'react';

import Geo from '../geolocation/Geo';
import InputApp from '../forms/InputApp';
import SongsApp from '../SongsApp/SongsApp';
import ThunkApp from '../thunk/ThunkApp';
import TranslateApp from '../translate/TranslateApp';
import HooksApp from '../hooks/HooksApp';
import CommentApp from '../comments/CommentsApp';
import Divider from './Divider';

const App = () => {
  return (
    <div className="ui inverted">
      <Divider text="This part was about learning React Hooks!" />
      <HooksApp />
      <Divider text="This part was about learning React Context!" />
      <TranslateApp />
      <Divider text="This part was about learning React Thunk" />
      <ThunkApp />
      <Divider text="This part was about learning Redux" />
      <SongsApp />
      <Divider text="This part was about handling input" />
      <InputApp />
      <Divider text="This part was about using logic in rendering components" />
      <Geo />
      <Divider text="This part was about reusing components" />
      <CommentApp />
    </div>
  );
};

export default App;
