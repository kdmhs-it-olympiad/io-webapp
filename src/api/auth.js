import axios from 'axios';

export default {
  getToken({ username, password }) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return axios.post('https://io.choich.space/auth', formData);
  },
};
