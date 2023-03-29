import axios from 'axios';

axios.defaults.params = {
  key: '33988995-a64a390706535bd3a9c78052f',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getData = async (search, page) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      q: search,
      page,
    },
  });
  return data;
};
