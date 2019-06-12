<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
class IoButton extends Vue {
  @Prop({ type: Boolean }) ghost;

  @Prop({ type: Boolean }) black;

  @Prop({ type: Boolean }) disabled;

  get classes() {
    return {
      Button: true,
      'Button--ghost': this.ghost,
      'Button--black': this.black,
    };
  }
}

export default IoButton;
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style lang="scss">
  .Button {
    padding: 18px 22px;
    border: 2px solid transparent;
    background-color: black;
    color: white;

    font-weight: bold;
    font-size: 20px;

    &--black {
      border-color: black;
      background-color: black;

      &:disabled {
        background-color: #7f7788;
        border-color: #7f7788;
      }
    }

    &--ghost {
      color: black;
      background-color: white !important;

      &:disabled {
        opacity: .6;
      }
    }
  }
</style>
