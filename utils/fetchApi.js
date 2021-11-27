import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '43c3c7e885mshf601c1403bab68ap132d85jsn1d7f5a5f2b98'
//   }

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '43c3c7e885mshf601c1403bab68ap132d85jsn1d7f5a5f2b98',
    },
  });

  return data;
};
