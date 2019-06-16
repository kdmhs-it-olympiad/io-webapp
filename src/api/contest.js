import axios from 'axios';

export default {
  apply(data) {
    const parsedData = {
      name: data.name,
      gender: data.sex,
      birth: data.birthday,
      agent_phone: data.parentPhoneNumber,
      phone: data.phoneNumber,
      school: data.school.name,
      grade: data.school.grade,
      klass: data.school.klass,
      zip_code: data.address.postcode,
      address: data.address.addres,
      detail_address: data.addressDetail,
      sector: data.sector,
      password: data.password,
      launch_number: data.lunchNumber,
    };

    return axios.post('http://io.choich.space/contestant', parsedData);
  },

  confirm() {

  },
}