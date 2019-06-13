<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
class Tile extends Vue {
  @Prop({ default: '' }) title;
}

export default Tile;
</script>

<template>
  <div class="Tile">
    <h3 class="Tile__title">{{ title }}</h3>
    <div class="Tile__contents">
      <slot></slot>
    </div>
    <div class="Tile__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .Tile {
    padding: 120px;
    flex: 1;

    @media (max-width: 780px) {
      padding: 40px 20px;
    }

    &__title {
      font-size: 48px;
      font-weight: bold;

      margin-bottom: 80px;

      @media (max-width: 780px) {
        font-size: 24px;
        margin-bottom: 32px;
      }
    }

    &__contents {

    }

    &__footer {
      margin-top: 56px;

      @media (max-width: 780px) {
        margin-top: 32px;
      }
    }
  }
</style>