<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VModel } from '@/decorators';

@Component
class FormTextarea extends Vue {
  @VModel() text;

  @Prop({ type: String }) error;

  @Prop({ type: String }) placeholder;

  @Prop({ type: String }) label;

  @Prop({ type: String }) addiction;

  @Prop({ type: Boolean }) validate;

  @Prop({ type: Number }) cols;

  @Prop({ type: Number, default: 7 }) rows;
}

export default FormTextarea;
</script>

<template>
  <div class="FormTextarea">
    <p class="FormTextarea__label">
      {{ label }}
      <small v-if="addiction">({{ addiction }})</small>
    </p>

    <textarea
      class="FormTextarea__input"
      :class="{ 'FormTextarea__input--error': validate }"
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
      v-model="text"></textarea>

    <p class="FormTextarea__error" v-if="validate">{{ error }}</p>
  </div>
</template>

<style lang="scss">
  .FormTextarea {
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
      font-size: 16px;
      width: 100%;
      border: 2px solid #494251;
      border-radius: 0;
      padding: 11px 10px;
      outline: none;
      line-height: 18px;
      resize: none;
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

      &::placeholder {
        font-size: 16px;
      }
    }
  }
</style>
