import axios from 'axios';

export default {
  schedule() {
    return axios.get('https://io.choich.space/calender');
  },
};
