import React from 'react';
import PropTypes from 'prop-types';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setImageSpan);
  }

  setImageSpan = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10 + 1);

    this.setState({ span });
  }

  render() {
    const { image } = this.props;
    const { description, urls } = image;

    const { span } = this.state;

    return (
      <div style={{ gridRowEnd: `span ${span}` }}>
        <img ref={this.imageRef} alt={description} src={urls.small} />
      </div>
    );
  }
}

ImageCard.propTypes = {
  image: PropTypes.any.isRequired,
};

export default ImageCard;
