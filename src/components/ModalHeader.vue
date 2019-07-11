<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
class ModalHeader extends Vue {
  @Prop({ type: String, default: '' })
  text;

  close() {
    this.$emit('close');
  }
}

export default ModalHeader;
</script>

<template>
  <div class="ModalHeader">
    <div class="ModalHeader__cancelbox">
      <i class='bx bx-x' @click.stop="close"></i>
    </div>
    <h2>
      <slot></slot>
      {{ text }}
    </h2>
  </div>
</template>

<style lang="scss">
  @import '../styles/color';

  .ModalHeader {
    font-size: 48px;
    font-weight: bold;
    padding: 24px;
    line-height: 1.33;

    h2 {
      margin-left: 56px;
      word-break: keep-all;
    }

    @media (max-width: 1080px) {
      display: flex;
      flex-flow: row-reverse nowrap;
      justify-content: space-between;
      box-shadow: 0 1px 4px 0 rgba($tile__font, .15);

      font-size: 24px;
      padding: 16px 20px;

      h2 {
        margin-left: 0;
      }
    }

    &__cancelbox {
      display: flex;
      justify-content: flex-end;
      color: #7f7788;

      i {
        cursor: pointer;
      }
    }
  }
</style>
