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
      launch_number: data.lunchCount,
    };

    const formData = new FormData();

    Object.keys(parsedData)
      .forEach(data => formData.append(data, parsedData[data]));

    formData.append('photo', data.image);

    return axios.post('https://io.choich.space/contestant', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  confirm() {

  },
}