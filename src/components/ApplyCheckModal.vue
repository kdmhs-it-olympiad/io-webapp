<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    Modal: () => import('@/components/Modal.vue'),
    ModalHeader: () => import('@/components/ModalHeader.vue'),
    IoButton: () => import('@/components/IoButton.vue'),
  },
})
class ApplyCheckModal extends Vue {
  @Prop({ type: Boolean }) visible;

  get syncedVisible() {
    return this.visible;
  }

  set syncedVisible(v) {
    this.$emit('update:visible', v);
  }

  openModal() {
  }
}

export default ApplyCheckModal;
</script>

<template>
  <modal :visible.sync="syncedVisible">
    <modal-header @close="syncedVisible = false">참가신청 확인</modal-header>

    <div class="ApplyCheckModal__body">
    </div>

    <div class="ApplyCheckModal__footer">
        <io-button @click="openModal" black>확인하고 수험표 받기 <i class='bx bx-fw bx-right-arrow-alt'></i></io-button>
    </div>
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
  }
</style>