<script>
import { Component, Vue, Prop, Provide } from 'vue-property-decorator';

@Component
class FormRadio extends Vue {
  @Prop({ type: String }) name;
  @Prop({ type: String }) label;

  @Prop({ type: String }) value;
}

export default FormRadio;
</script>

<template>
  <div class="FormRadio">
    <p class="FormRadio__label">
      {{ label }}
    </p>

    <div class="FormRadio__container">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .FormRadio {
    font-size: 14px;

    &__container {
      border: 2px solid #494251;
      display: flex;

      & > * {
        flex: 1;
      }
    }

    &__label {
      margin-bottom: 8px;

      small {
        font-size: 12px;
        color: #7f7788;
      }
    }

    &__input {
      font-size: 14px;
      width: 100%;
      border: 2px solid #494251;
      border-radius: 0;
      padding: 13px 10px;
      outline: none;
      box-sizing: border-box;
      -webkit-appearance: none;

      &:focus {
        border-color: #4169e1;
      }

      &--invalid {
        border-color: #ff6255;
      }
    }
  }
</style>

