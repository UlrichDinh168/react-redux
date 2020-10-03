/* eslint-disable react/no-unused-state */
import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class TranslateApp extends React.Component {
  state = { language: 'eng' };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="pink">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default TranslateApp;
