<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
class FormRow extends Vue {

}

export default FormRow;
</script>

<template>
  <div class="FormRow">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .FormRow {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 780px) {
      flex-direction: column;
      margin-bottom: 0;
    }

    .blank {
      @media (max-width: 780px) {
        display: none;
      }
    }

    & > * {
      flex: 1;
      box-sizing: border-box;
      margin-right: 20px;

      @media (max-width: 780px) {
        margin-right: 0;
        margin-bottom: 16px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
