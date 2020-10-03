/* eslint-disable react/prop-types */
import React from 'react';

// Default language is english
const Context = React.createContext('eng');

export class LanguageStore extends React.Component {
  state = { language: 'eng' };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {children}
      </Context.Provider>
    );
  }
}

export default Context;
