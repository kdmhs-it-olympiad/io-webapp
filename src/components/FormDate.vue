<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VModel } from '@/decorators';
import Datepicker from 'vuejs-datepicker';

@Component({
  components: {
    Datepicker,
  },
})
class FormDate extends Vue {
  @VModel() syncedValue;

  @Prop({ type: String }) label;

  @Prop({ type: String }) placeholder;

  @Prop({ type: String }) error;

  @Prop({ type: Boolean }) validate;
}

export default FormDate;
</script>

<template>
  <div class="FormDate">
    <p class="FormDate__label">{{ label }}</p>

    <datepicker
      class="FormDate__input"
      :class="{ 'FormDate__input--error': validate }"
      format="yyyy년 MM월 dd일"
      :placeholder="placeholder"
      v-model="syncedValue" />

    <p class="FormDate__error" v-if="validate">{{ error }}</p>
  </div>
</template>

<style lang="scss">
  .FormDate {
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
      outline: none;
      border: 2px solid #494251;

      &--error {
        border-color: #ff6255;
      }

      input {
        font-size: 14px;
        width: 100%;
        outline: none;
        box-sizing: border-box;
        padding: 11px 10px;
        border: none;
      }
    }
  }
</style>
