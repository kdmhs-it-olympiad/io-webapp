<script>
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import ContestAPI from '@/api/contest';
import Modal from './Modal.vue';
import ModalHeader from './ModalHeader.vue';
import IoButton from './IoButton.vue';
import FormRow from './FormRow.vue';
import FormText from './FormText.vue';
import FormFile from './FormFile.vue';

@Component({
  components: {
    Modal,
    ModalHeader,
    IoButton,

    FormRow,
    FormText,
    FormFile,
  },
})
class ApplyCheckModal extends Vue {
  @Prop({ type: Boolean }) visible;

  result = null;

  isLoading = false;

  formData = {
    phoneNumber: '',
    password: '',
  };

  formDataValidate = {
    phoneNumber: false,
    password: false,
  };

  photo = '';

  photoValidate = false;

  formDataValidator = {
    phoneNumber: () => this.formData.phoneNumber === '',
    password: () => this.formData.password === '',
  };

  get syncedVisible() {
    return this.visible;
  }

  set syncedVisible(v) {
    this.$emit('update:visible', v);
  }

  validate() {
    let flag = true;

    Object.keys(this.formDataValidator)
      .map(k => [k, this.formDataValidator[k]()])
      .forEach(([field, result]) => {
        this.formDataValidate[field] = result;
        if (result) flag = false;
      });

    return flag;
  }

  reset() {
    this.formData = {
      phoneNumber: '',
      password: '',
    };
    this.formDataValidate = {
      phoneNumber: false,
      password: false,
    };
    this.photo = '';
    this.photoValidate = false;
    this.result = null;
  }

  async submit() {
    if (!this.validate()) return;

    this.isLoading = true;

    try {
      const result = await ContestAPI.checkApply(this.formData);

      this.result = {
        name: result.data.name,
        photo: result.data.photo,
        school: result.data.school,
        grade: result.data.grade,
        class: result.data.klass,
        sector: result.data.sector,
      };
    } catch (err) {
      if (!err.response) {
        alert('네트워크 연결에 문제가 있습니다.');
        return;
      }

      switch (err.response.status) {
        case 401:
          alert('비밀번호가 틀렸습니다.');
          this.formData.password = '';
          break;
        case 404:
          this.result = {};
          break;
        default:
          alert('서버에 문제가 있습니다.');
          break;
      }
    } finally {
      this.isLoading = false;
    }
  }

  async photoSubmit() {
    if (!this.photo) {
      this.photoValidate = true;
      return;
    }

    this.isLoading = true;

    try {
      const result = await ContestAPI.uploadPhoto({
        ...this.formData,
        photo: this.photo,
      });
      console.log(result.data);
      this.$set(this.result, 'photo', result.data.photo);
    } catch (err) {
      if (!err.response) {
        alert('네트워크에 문제가 있습니다.');
        return;
      }

      switch (err.response.status) {
        case 401:
          alert('비밀번호가 틀렸습니다.');
          this.reset();
          break;
        case 404:
          alert('존재하지 않는 신청자입니다.');
          this.reset();
          break;
        default:
          alert('서버에 문제가 있습니다.');
          break;
      }
    } finally {
      this.isLoading = false;
    }
  }

  downloadAdmission() {
    alert('2019년 7월 19일부터 가능합니다. (이후에 접속하여 수험표를 출력해주시고 대회 당일 지참해주시기 바랍니다.)');
  }

  closeModal() {
    this.syncedVisible = false;
    setTimeout(() => this.reset(), 500);
  }

  get modalWidth() {
    return (this.result && this.result.photo) ? '40vw' : '';
  }
}

export default ApplyCheckModal;
</script>

<template>
  <modal :visible.sync="syncedVisible" :loading="isLoading" :width="modalWidth">
    <template v-if="!result">
      <modal-header @close="closeModal()">참가신청 확인</modal-header>

      <div class="ApplyCheckModal__body">
        <form @submit.prevent>
          <form-row>
            <form-text
              v-model="formData.phoneNumber"
              :validate="formDataValidate.phoneNumber"
              label="법정대리인 전화번호"
              error="전화번호는 필수로 입력해야 합니다"
              placeholder="신청할 때 등록했던 전화번호를 입력하세요">
            </form-text>

            <form-text
              v-model="formData.password"
              password
              :validate="formDataValidate.password"
              label="신청 확인용 비밀번호"
              error="비밀번호는 필수로 입력해야 합니다"
              placeholder="신청할 때 등록했던 비밀번호를 입력하세요">
            </form-text>
          </form-row>
        </form>
      </div>

      <div class="ApplyCheckModal__footer">
          <io-button @click="submit" black>
            확인하고 수험표 받기 <i class='bx bx-fw bx-right-arrow-alt'></i>
          </io-button>
      </div>
    </template>

    <template v-else-if="result.name && !result.photo">
      <modal-header @close="closeModal">
        {{ result.name }}님,<br>
        증명사진을 찾을 수 없습니다.
      </modal-header>

      <div class="ApplyCheckModal__body">
        <form @submit.prevent>
          <p>신청 정보는 있으나 증명사진을 업로드하지 않으셨습니다.</p>
          <p>이곳에서 이미지를 업로드 후 정보 확인 및 수험표 출력을 하실 수 있습니다.</p>
          <form-row>
          </form-row>
          <form-row>
            <form-file
              label="신청자 증명사진"
              :validate="photoValidate"
              placeholder="이미지를 올리세요"
              error="증명사진은 필수로 올려야합니다"
              button="이미지 업로드"
              files=".png, .jpg, .jpeg"
              description="* 일체의 수정을 거치지 않은 명함판 사진(여권용, 5cm X 7cm)만 등록 가능합니다"
              v-model="photo"
              name="photo">
            </form-file>
          </form-row>
        </form>
      </div>

      <div class="ApplyCheckModal__footer">
        <io-button @click="photoSubmit">업로드</io-button>
      </div>
    </template>

    <template v-else-if="result.photo">
      <modal-header @close="closeModal">
        {{ result.name }}님,<br>
        문제 없이 신청되었습니다.
      </modal-header>
      <div class="ApplyCheckModal__body">
        <div class="ApplyCheckModal__info-wrapper">
          <img class="ApplyCheckModal__image" :src="'https://file.choich.space' + result.photo">
          <div class="ApplyCheckModal__text-wrapper">
            <p class="ApplyCheckModal__text ApplyCheckModal__text--bold">{{ result.name }}</p>
            <p class="ApplyCheckModal__text">
              {{ `${result.school} ${result.grade}학년 ${result.class}반` }}
            </p>
            <p class="ApplyCheckModal__text">
              {{ `${result.sector} 부문` }}
            </p>
          </div>
        </div>
      </div>

      <div class="ApplyCheckModal__footer">
          <io-button @click="downloadAdmission" black>수험표 받기</io-button>
      </div>
    </template>
    <template v-else>
      <modal-header @close="closeModal()">
        신청 정보를 찾을 수 없습니다.
      </modal-header>

      <div class="ApplyCheckModal__body">
      </div>
    </template>
  </modal>
</template>

<style lang="scss">
  @import '../styles/color';

  .ApplyCheckModal {
    &__body {
      padding: 24px 80px;

      @media (max-width: 780px) {
        padding: 20px;
      }
    }

    &__body > form > p {
      line-height: 1.33;
    }

    &__footer {
      padding: 24px 80px 48px 80px;

      display: flex;
      flex-flow: row nowrap;
      justify-content: center;

      @media (max-width: 780px) {
        padding: 20px;

        * {
          flex: 1;
        }
      }
    }

    &__info-wrapper {
      display: flex;
      align-items: center;
    }

    &__text-wrapper {
      margin-left: 20px;
    }

    &__image {
      width: 120px;
      box-shadow: 0 4px 12px 0 rgba(49, 40, 60, 0.25);
    }

    &__text {
      margin-bottom: 10px;
    }

    &__text--bold {
      font-weight: 800;
      margin-bottom: 12px;
    }
  }
</style>
