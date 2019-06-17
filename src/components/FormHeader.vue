<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
class FormHeader extends Vue {
}

export default FormHeader;
</script>

<template>
  <div class="FormHeader">
    <div class="FormHeader__image"><slot name="icon"></slot></div>
    <h4 class="FormHeader__title"><slot></slot></h4>
  </div>
</template>

<style lang="scss">
  .FormHeader {
    margin-bottom: 32px;

    &__title {
      font-size: 24px;
      font-weight: bold;
      display: inline;

      @media (max-width: 780px) {
        font-size: 16px;
      }
    }

    &__image {
      display: inline-block;
      font-size: 24px;
      width: 24px;
      height: 24px;
      margin-right: 4px;

      @media (max-width: 780px) {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
