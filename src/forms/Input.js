import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  state = { value: '' };

  onSubmit = (e) => {
    const { value } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault();
    onSubmit(value);
  }

  onChange = (e) => {
    const { onChange } = this.props;
    const { value } = e.target;

    e.preventDefault();
    this.setState({ value });
    onChange(value);
  }

  render() {
    const { value } = this.state;

    return (
      <div className="ui input">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
