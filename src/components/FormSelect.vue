<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VModel } from '@/decorators';

@Component
class FormSelect extends Vue {
  @Prop({ type: String }) name;
  @Prop({ type: String }) label;
  @Prop({ type: String }) addiction;
  @Prop({ type: String }) placeholder;

  @Prop({ type: String }) error;
  @Prop({ type: Boolean }) validate;

  @VModel() model;

	get selectClasses() {
		return {
			'FormSelect__inner': true,
			'FormSelect__inner--placeholder': this.model === '',
		}
	}
}

export default FormSelect;
</script>

<template>
  <div class="FormSelect">
    <p class="FormSelect__label">{{ label }} <small v-if="addiction">({{ addiction }})</small></p>

    <div
      class="FormSelect__container"
      :class="{ 'FormSelect__container--error': validate }">
      <select
        v-model="model"
        :class="selectClasses"
        :name="name">
				<option
					value=""
					disabled
					selected
					hidden>{{ placeholder }}</option>
        <slot></slot>
      </select>
    </div>

    <p class="FormSelect__error" v-if="validate">{{ error }}</p>
  </div>
</template>

<style lang="scss">
  .FormSelect {
		box-sizing: border-box;

    &__container {
      border: 2px solid #494251;

      &--error {
        border-color: #ff6255;
      }
    }
    
    &__error {
      margin-top: 8px;
      font-size: 12px;
      color: #ff6255;
    }

    &__inner {
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 100%;
      padding: 13px 10px;
      appearance: none;
      outline: none;
      background: none;
      border: none;
      font-size: 14px;
      line-height: 14px;
			margin: 0;

			&--placeholder {
				opacity: .5;
			}
    }

    &__label {
      font-size: 14px;
      margin-bottom: 8px;

      small {
        font-size: 0.8em;
        color: #7f7788;
      }
    }
  }
</style>
