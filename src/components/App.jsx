import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

import { Searchbar } from './Searchbar/Searchbar';
import { Global } from '@emotion/react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import { getData } from './services/postService';
import { Modal } from './Modal/Modal';

import { Container, globalStyles, AppWrapper } from './App.styled';

export const App = () => {
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [imageModal, setImageModal] = useState('');

  useEffect(() => {
    if (!search) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getData(search, page);
        setHits(prev => [...prev, ...data.hits]);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, search]);

  const handleChangeSearch = search => {
    setSearch(search);
    setHits([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  };

  const openModal = url => {
    setImageModal(url);
  };

  const closeModal = () => {
    setImageModal('');
  };

  return (
    <Container>
      <Global styles={globalStyles} />
      <AppWrapper>
        <Searchbar onSubmit={handleChangeSearch}></Searchbar>
        <ImageGallery hits={hits} openModal={openModal} />

        {isLoading && <Loader />}
        {hits.length > 0 && (
          <LoadMoreBtn title="Load More" onClick={handleChangePage} />
        )}
        {imageModal && (
          <Modal image={imageModal} closeModal={closeModal}></Modal>
        )}
      </AppWrapper>
    </Container>
  );
};
