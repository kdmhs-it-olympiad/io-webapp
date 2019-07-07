import axios from 'axios';

export default {
  apply(data) {
    const parsedData = {
      name: data.name,
      gender: data.sex,
      birth: data.birthday.toISOString().split('T')[0],
      agent_phone: data.parentPhoneNumber,
      phone: data.phoneNumber,
      school: data.school.name,
      grade: data.school.grade,
      klass: data.school.class,
      zip_code: data.address.postcode,
      address: data.address.address,
      detail_address: data.addressDetail,
      sector: data.sector,
      password: data.password,
      lunch_number: data.lunchCount,
    };

    const formData = new FormData();

    Object.keys(parsedData)
      .forEach(v => formData.append(v, parsedData[v]));

    formData.append('photo', data.image);

    return axios.post('https://io.choich.space/contestant', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  checkApply(data) {
    return axios.get('https://io.choich.space/contestant', {
      params: {
        agent_phone: data.phoneNumber,
        password: data.password,
      },
    });
  },

  checkAssignment(data) {
    return axios.get('https://io.choich.space/assignment', {
      params: {
        agent_phone: data.phoneNumber,
        password: data.password,
      },
    });
  },

  uploadPhoto(data) {
    const formData = new FormData();

    formData.append('photo', data.photo);
    formData.append('agent_phone', data.phoneNumber);
    formData.append('password', data.password);

    return axios.patch('https://io.choich.space/contestant', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  uploadAssignment(data, submitted = false) {
    const formData = new FormData();

    formData.append('assignment', data.assignment);
    formData.append('agent_phone', data.phoneNumber);
    formData.append('password', data.password);

    return axios[submitted ? 'patch' : 'post']('https://io.choich.space/assignment', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
