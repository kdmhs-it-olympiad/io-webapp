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
  <button
    :class="classes"
    :disabled="disabled"
    @click.stop="$emit('click')">

    <slot></slot>
  </button>
</template>

<style lang="scss">
  .Button {
    padding: 16px 20px;
    border: 2px solid transparent;
    box-sizing: border-box;
    background-color: black;
    color: white;

    font-weight: bold;
    font-size: 20px;

    transition: .3s opacity ease-in-out;
    cursor: pointer;

    @media (max-width: 1080px) {
      padding: 11px 12px;
      font-size: 14px;
    }

    &--black {
      border-color: #31283c;
      background-color: #31283c;

      &:disabled {
        background-color: #7f7788;
        border-color: #7f7788;
      }

      &:hover {
        opacity: .6;
      }

      &:active {
        opacity: .8;
      }
    }

    &--ghost {
      color: black;
      background-color: white !important;

      &:disabled {
        opacity: .6;
      }

      &:hover {
        opacity: .6;
      }

      &:active {
        opacity: .8;
      }
    }
  }
</style>
