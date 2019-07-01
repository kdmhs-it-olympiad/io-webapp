import axios from 'axios';
import store from '@/store';

function getOptions() {
  return {
    headers: {
      Authorization: `Bearer ${store.state.token}`,
    },
  };
}

export default {
  fetchApplicants() {
    return axios.get('https://io.choich.space/contestant/list', getOptions());
  },

  fetchQnA() {
    return axios.get('https://io.choich.space/qa', getOptions());
  },

  uploadQnA({ id, answer }) {
    const formData = new FormData();
    formData.append('answer', answer);
    return axios.patch(`https://io.choich.space/qa/${id}`, formData, getOptions());
  },
};
