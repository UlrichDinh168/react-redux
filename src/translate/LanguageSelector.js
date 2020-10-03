/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import LanguageContext from './contexts/LanguageContext';

class LanguageSelector extends React.Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = LanguageContext;

  render() {
    const { onLanguageChange } = this.context;
    return (
      <div>
        <h3>
          Select a language:
        </h3>
        <i className="flag large us" onClick={() => onLanguageChange('eng')} />
        <i className="flag large fr" onClick={() => onLanguageChange('fr')} />
      </div>
    );
  }
}

export default LanguageSelector;
