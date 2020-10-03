import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

class FormComponent extends React.Component {
  state = { inputValue: '' };

  onSearchSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;
    const { onSearchSubmit } = this.props;

    onSearchSubmit(inputValue);
  }

  onInputChange = (inputValue) => {
    this.setState({ inputValue });
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.onSearchSubmit}>
        <div className="field">
          <Input
            onSubmit={this.onSearchSubmit}
            onChange={this.onInputChange}
          />
        </div>
        <button className="ui button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

FormComponent.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
