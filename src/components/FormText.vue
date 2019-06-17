<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VModel } from '@/decorators';

@Component
class FormText extends Vue {
  @VModel() text;

  @Prop({ type: String }) error;

  @Prop({ type: String }) placeholder;

  @Prop({ type: String }) label;

  @Prop({ type: String }) addiction;

  @Prop({ type: Boolean }) validate;

  @Prop({ type: Boolean }) password;

  get inputType() {
    return this.password ? 'password' : 'text';
  }
}

export default FormText;
</script>

<template>
  <div class="FormText">
    <p class="FormText__label">
      {{ label }}
      <small v-if="addiction">({{ addiction }})</small>
    </p>

    <input
      class="FormText__input"
      :class="{ 'FormText__input--error': validate }"
      :type="inputType"
      :placeholder="placeholder"
      v-model="text">

    <p class="FormText__error" v-if="validate">{{ error }}</p>
  </div>
</template>

<style lang="scss">
  .FormText {
    font-size: 14px;

    &__label {
      margin-bottom: 8px;

      small {
        font-size: 12px;
        color: #7f7788;
      }
    }

    &__error {
      margin-top: 8px;
      font-size: 12px;
      color: #ff6255;
    }

    &__input {
      font-size: 14px;
      width: 100%;
      border: 2px solid #494251;
      border-radius: 0;
      padding: 11px 10px;
      outline: none;
      line-height: 18px;
      box-sizing: border-box;
      -webkit-appearance: none;

      &--error {
        border-color: #ff6255;
      }

      &:focus {
        border-color: #4169e1;
      }

      &--invalid {
        border-color: #ff6255;
      }
    }
  }
</style>
