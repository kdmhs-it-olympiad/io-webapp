<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
class Modal extends Vue {
  @Prop({ type: String }) title;
  @Prop({ type: Boolean }) visible;

  @Prop({ type: Boolean }) loading;

  get syncedVisible() {
    return this.visible;
  }

  set syncedVisible(v) {
    this.$emit('update:visible', v);
  }

  get wrapperClasses() {
    return {
      'Modal__wrapper': true,
      'Modal__wrapper--visible': this.syncedVisible,
    }
  }
}

export default Modal;
</script>

<template>
  <div :class="wrapperClasses" @click="">
    <div class="Modal" @click.stop="">
      <slot></slot>
      <div class="Modal__loading" v-if="loading">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .Modal {
    background-color: white;
    width: 50vw;
    margin: 15vh auto;
    box-sizing: border-box;
    position: relative;

    @media (max-width: 780px) {
      margin: 0;
      width: 100vw;
    }

    &__loading {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      background-color: rgba(0, 0, 0, .2);

      .lds-ring {
        position: absolute;
        top: calc(50% - 32px);
        left: calc(50% - 32px);
      }
    }

    &__wrapper {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: auto;

      background-color: rgba(0, 0, 0, .5);
      pointer-events: none;
      opacity: 0;

      transition: .1s opacity ease-in-out;

      &--visible {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .lds-ring {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
    }

    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 6px solid white;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: white transparent transparent transparent;
    }

    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }

    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }

    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }

    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>