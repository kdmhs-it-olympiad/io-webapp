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
class FileUploadModal extends Vue {
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

  file = '';

  fileValidate = false;

  formDataValidator = {
    phoneNumber: () => this.formData.phoneNumber === '',
    password: () => this.formData.password === '',
  };

  success = false;

  submitted = false;

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
    this.file = '';
    this.fileValidate = false;
    this.result = null;
  }

  async submit() {
    if (!this.validate()) return;

    this.isLoading = true;

    try {
      const result = await ContestAPI.checkApply(this.formData);
      const submitted = await ContestAPI.checkAssignment(this.formData);

      this.result = {
        name: result.data.name,
        photo: result.data.photo,
        school: result.data.school,
        grade: result.data.grade,
        class: result.data.klass,
        sector: result.data.sector,
      };

      this.submitted = !!submitted.data.assignment;

      if (result.data.sector === 'programming') {
        this.success = true;
      }
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

  async fileSubmit() {
    if (!this.file) {
      this.fileValidate = true;
      return;
    }

    this.isLoading = true;

    try {
      await ContestAPI.uploadAssignment({
        ...this.formData,
        assignment: this.file,
      }, this.submitted);
    } catch (err) {
      if (!err.response) {
        alert('네트워크에 문제가 있습니다.');
        return;
      }

      switch (err.response.status) {
        case 406:
          alert('프로그래밍 부문은 과제를 올릴 수 없습니다.');
          break;
        case 400:
          alert('지원하지 않는 파일 형식입니다.');
          break;
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

  closeModal() {
    this.syncedVisible = false;
    setTimeout(() => this.reset(), 500);
  }

  get needFileUpload() {
    return this.result && (this.result.sector === 'business' || this.result.sector === 'design');
  }
}

export default FileUploadModal;
</script>

<template>
  <modal :visible.sync="syncedVisible" :loading="isLoading">
    <template v-if="success">
      <modal-header @close="closeModal()">
        {{ needFileUpload ? '파일을 성공적으로 업로드했습니다.' : '신청하신 부문의 예선 과제는 없습니다.' }}
      </modal-header>
      <div class="FileUploadModal__body">
        <div class="FileUploadModal__info-wrapper">
          <img class="FileUploadModal__image" :src="`https://file.choich.space/photo/${result.photo}`">
          <div class="FileUploadModal__text-wrapper">
            <p class="FileUploadModal__text FileUploadModal__text--bold">{{ result.name }}</p>
            <p class="FileUploadModal__text">
              {{ `${result.school} ${result.grade}학년 ${result.class}반` }}
            </p>
            <p class="FileUploadModal__text">
              {{ `${result.sector} 부문` }}
            </p>
          </div>
        </div>
      </div>

      <div class="FileUploadModal__footer">
          <io-button @click="reset" black>다시 제출하기</io-button>
      </div>
    </template>
    <template v-else-if="!result">
      <modal-header @close="closeModal()">예선과제 제출</modal-header>

      <div class="FileUploadModal__body">
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

      <div class="FileUploadModal__footer">
          <io-button @click="submit" black>
            확인하고 수험표 받기 <i class='bx bx-fw bx-right-arrow-alt'></i>
          </io-button>
      </div>
    </template>

    <template v-else-if="!result.name">
      <modal-header @close="closeModal()">
        신청 정보를 찾을 수 없습니다.
      </modal-header>

      <div class="FileUploadModal__body">
      </div>
    </template>

    <template v-else>
      <modal-header
        @close="closeModal"
        :text="!submitted
          ? `${result.name}님,\n예선 과제를 제출해주세요.`
          : `${result.name}님,\n이미 과제를 제출하셨습니다.\n다시 제출하실 수 있습니다.`">
      </modal-header>


      <div class="FileUploadModal__body">
        <form @submit.prevent>
          <p>예선 과제를 제출해주세요. 제출 기한은 2019년 7월 14일 18시까지입니다.</p>
          <p>파일의 크기가 크면 제출이 오래 걸릴 수 있습니다.</p>
          <form-row>
          </form-row>
          <form-row>
            <form-file
              label="예선과제 파일 선택"
              :validate="fileValidate"
              placeholder="파일을 선택하세요"
              error="파일은 필수로 선택하셔야 합니다."
              button="예선과제 업로드"
              files="*"
              description=""
              v-model="file"
              name="file">
            </form-file>
          </form-row>
        </form>
      </div>

      <div class="FileUploadModal__footer">
        <io-button @click="fileSubmit">업로드</io-button>
      </div>
    </template>
  </modal>
</template>

<style lang="scss">
  @import '../styles/color';

  .FileUploadModal {
    &__body {
      padding: 24px 80px;

      @media (max-width: 1080px) {
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

      @media (max-width: 1080px) {
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
