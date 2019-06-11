<script>
  import { Component, Vue, Prop } from 'vue-property-decorator';

  @Component
  class IoButton extends Vue {
    @Prop({ type: Boolean }) ghost;
    @Prop({ type: Boolean }) black;

    get classes() {
      return {
        'Button': true,
        'Button--ghost': this.ghost,
        'Button--black': this.black,
      }
    }
  }

  export default IoButton;
</script>

<template>
  <button :class="classes">
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
    }

    &--ghost {
      color: black;
      background-color: white;
    }
  }
</style>