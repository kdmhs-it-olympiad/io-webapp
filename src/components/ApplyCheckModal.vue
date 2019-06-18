<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import contest from '@/api/contest';

@Component({
  components: {
    Modal: () => import('@/components/Modal.vue'),
    ModalHeader: () => import('@/components/ModalHeader.vue'),
    IoButton: () => import('@/components/IoButton.vue'),

    FormRow: () => import('@/components/FormRow.vue'),
    FormText: () => import('@/components/FormText.vue'),
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
    this.result = null;
  }

  async submit() {
    if (!this.validate()) return;

    this.isLoading = true;

    try {
      const result = await contest.checkApply(this.formData);

      this.result = {
        name: result.data.name,
        imageUrl: result.data.photo,
        school: result.data.school,
        grade: result.data.grade,
        class: result.data.klass,
        sector: result.data.sector,
      };
    } catch (err) {
      if (!err.response) alert('네트워크 연결에 문제가 있습니다.');
      else {
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
      }
    } finally {
      this.isLoading = false;
    }
  }

  downloadAdmission() {
    alert('준비 중입니다.');
  }

  closeModal() {
    this.syncedVisible = false;
    setTimeout(() => this.reset(), 500);
  }

  get modalWidth() {
    return this.result ? '40vw' : '';
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
    <template v-else-if="result.name">
      <modal-header @close="closeModal()">
        {{ result.name }}님,<br>
        문제 없이 신청되었습니다.
      </modal-header>
      <div class="ApplyCheckModal__body">
        <div class="ApplyCheckModal__info-wrapper">
          <img class="ApplyCheckModal__image" :src="result.imageUrl">
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
