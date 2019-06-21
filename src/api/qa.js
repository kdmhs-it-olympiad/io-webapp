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

  post({ content: question, email, name }) {
    const formData = new FormData();
    formData.append('question', question);
    formData.append('name', name);
    formData.append('email', email);
    return axios.post('https://io.choich.space/qa', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
