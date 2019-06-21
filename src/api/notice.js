import axios from 'axios';

export default {
  fetch(offset, count) {
    return axios.get('https://io.choich.space/qa', {
      params: {
        offset,
        count,
      },
    });
  },

  post({ content: context, email, name }) {
    return axios.post('https://io.choich.space/qa', {
      context, email, name,
    });
  },
};
