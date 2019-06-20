<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import poster from '@/assets/img/poster.jpg';

@Component
class PosterPopup extends Vue {
  @Prop({ type: Boolean }) visible;

  poster = poster;

  get syncedVisible() {
    return this.visible;
  }

  set syncedVisible(v) {
    this.$emit('update:visible', v);
  }

  get wrapperClasses() {
    return {
      'PosterPopup__wrapper': true,
      'PosterPopup__wrapper--visible': this.syncedVisible,
    };
  }
}
export default PosterPopup;
</script>

<template>
  <div :class="wrapperClasses">
    <div class="PosterPopup">
      <div class="PosterPopup__cancel">
        <i class='bx bx-x' @click.stop="syncedVisible = false"></i>
      </div>
      <img class="PosterPopup__image" :src="poster">
    </div>
  </div>
</template>

<style lang="scss">
.PosterPopup {
  position: relative;
  margin: 0 auto;
  width: 50vw;
  box-sizing: border-box;
  padding: 50px 0;

  @media (max-width: 1080px) {
    margin: 0;
    width: 100vw !important;
    padding: 50px 10px;
  }

  &__image {
    width: 100%;
  }

  &__cancel {
    position: absolute;
    padding: inherit;
    top: 24px;
    right: 24px;
    font-size: 48px;
    color: white;

    @media (max-width: 1080px) {
      font-size: 36px;
      top: 0;
      right: 0;
    }
  }

  &__cancel i {
    cursor: pointer;
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
}
</style>
