// import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';
import { ImageGalleryItemStyle } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { images } = this.props;
    return (
      images &&
      images.map(el => {
        return (
          <ImageGalleryItemStyle key={el.id}>
            <img src={el.webformatURL} alt={el.tags} />
            {showModal && (
              <Modal
                alt={el.tags}
                src={el.largeImageURL}
                onClose={this.toggleModal}
              />
            )}
          </ImageGalleryItemStyle>
        );
      })
    );
  }
}
