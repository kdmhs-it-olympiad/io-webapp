<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { setTimeout } from 'timers';

@Component({
  components: {
    Modal: () => import('@/components/Modal.vue'),
    ModalHeader: () => import('@/components/ModalHeader.vue'),
    IoButton: () => import('@/components/IoButton.vue'),
  },
})
class ApplyCheckModal extends Vue {
  @Prop({ type: Boolean }) visible;

  result = null

  isLoading = false

  get syncedVisible() {
    return this.visible;
  }

  set syncedVisible(v) {
    this.$emit('update:visible', v);
  }

  submit() {
    this.isLoading = true;
    setTimeout(() => {
      this.result = {
        name: '박성민',
        imageUrl: 'http://www.breaknews.com/imgdata/breaknews_com/201707/2017073006581213.jpg',
        school: '한국디지털미디어고등학교',
        grade: 3,
        class: 3,
        lunchCount: 2,
        sector: '프로그래밍',
      };
      this.isLoading = false;
    }, 1000);
  }

  downloadAdmission() {
    alert('준비 중입니다.');
  }

  closeModal() {
    this.syncedVisible = false;
    setTimeout(() => this.result = null, 500);
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
              {{ `${result.sector} 부문 · 점심식사 ${result.lunchCount}명` }}
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
