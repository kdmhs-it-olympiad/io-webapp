<script>
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import { VModel } from '@/decorators';

@Component
class FormRadioItem extends Vue {
  @VModel() syncedValue;

  @Prop({ type: String }) item;

  @Prop({ type: String }) name;
}

export default FormRadioItem;
</script>

<template>
  <div class="FormRadioItem">
    <input
      class="FormRadioItem__input"
      type="radio"
      v-model="syncedValue"
      :value="item"
      :id="item"
      :name="name">

    <label :for="item">
      <p class="FormRadioItem__inner">
        <slot></slot>
      </p>
    </label>
  </div>
</template>

<style lang="scss">
  .FormRadioItem {
    label {
      display: inline-block;
      width: 100%;
      cursor: pointer;
    }

    &__input {
      display: none;
    }

    input:checked+label > &__inner {
      background-color: #494251;
      color: white;
    }

    &__inner {
      font-size: 14px;
      padding: 13px 0;
      text-align: center;
      transition: .3s background-color ease-in-out;
      transition: .3s color ease-in-out;
    }
  }
</style>
