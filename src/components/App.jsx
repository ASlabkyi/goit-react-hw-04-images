import { Component } from 'react';
import { Loader } from 'components/Loader/Loader';

import { Searchbar } from './Searchbar/Searchbar';
import { Global } from '@emotion/react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import { getData } from './services/postService';
import { Modal } from './Modal/Modal';

import { Container, globalStyles, AppWrapper } from './App.styled';

export class App extends Component {
  state = {
    hits: [],
    isLoading: false,
    search: '',
    page: 1,
    modalImage: '',
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      try {
        const data = await getData(this.state.search, this.state.page);
        this.setState(prevState => ({
          hits: prevState.hits.concat(data.hits),
        }));
      } catch (error) {
        alert(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleChangeSearch = async search => {
    this.setState({ search });
    this.setState({ isLoading: true });
    try {
      const data = await getData(search, 1);
      this.setState({ hits: data.hits });
    } catch (error) {
      alert(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleChangePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  openModal = url => {
    this.setState({ imageModal: url });
  };

  closeModal = () => {
    this.setState({ imageModal: '' });
  };

  render() {
    const { hits, isLoading } = this.state;

    return (
      <Container>
        <Global styles={globalStyles} />
        <AppWrapper>
          <Searchbar onSubmit={this.handleChangeSearch}></Searchbar>
          <ImageGallery hits={hits} openModal={this.openModal} />

          {isLoading && <Loader />}
          {hits.length > 0 && (
            <LoadMoreBtn title="Load More" onClick={this.handleChangePage} />
          )}
          {this.state.imageModal && (
            <Modal
              image={this.state.imageModal}
              closeModal={this.closeModal}
            ></Modal>
          )}
        </AppWrapper>
      </Container>
    );
  }
}
