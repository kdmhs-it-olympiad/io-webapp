<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VModel } from '@/decorators';

@Component
class FormAddress extends Vue {
  @Prop({ type: String }) label;
  @Prop({ type: String }) error;
  @Prop({ type: Boolean }) validate;

  @VModel() model;

  postcode = "";
  address = "";

  openAddress() {
     new daum.Postcode({
       oncomplete: (data) => {
         const { address, zonecode } = data;
         this.postcode = zonecode;
         this.address = address;

         this.model = {
           postcode: this.postcode,
           address: this.address,
         }
      }
    }).open();
  }

  get postcodeClasses() {
    return {
      'FormAddress__postcode': true,
      'FormAddress__postcode--placeholder': !this.postcode,
    }
  }
}

export default FormAddress;
</script>

<template>
  <div class="FormAddress">
    <p class="FormAddress__label">{{ label }}</p>

    <div
      class="FormAddress__container"
      :class="{ 'FormAddress__container--error': validate }">
      <div class="FormAddress__top">
        <p :class="postcodeClasses">
          <span v-if="postcode">{{ postcode }}</span>
          <span v-else>우편번호를 검색하세요</span>
        </p>

        <button
          class="FormAddress__find"
          @click.stop="openAddress">
          우편번호 검색
        </button>
      </div>
      <div class="FormAddress__bottom">
        <p class="FormAddress__address"> {{ address }}</p>
      </div>
    </div>

    <p class="FormAddress__error" v-if="validate">{{ error }}</p>
  </div>
</template>

<style lang="scss">
  .FormAddress {
    &__label {
      font-size: 14px;
      margin-bottom: 8px;
    }

    &__postcode {
      display: inline-block;
      font-size: 14px;
      box-sizing: border-box;
      padding: 13px 10px;
      width: calc(100% - 96px);

      span {
        overflow: auto;
      }

      &--placeholder {
        opacity: .6;
      }
    }

    &__error {
      margin-top: 8px;
      font-size: 12px;
      color: #ff6255;
    }

    &__container {
      border: 2px solid #494251;

      &--error {
        border-color: #ff6255;
      }
    }

    &__address {
      font-size: 14px;
      padding: 13px 10px;
      height: 14px;
      box-sizing: content-box;

      &:before {
        content: '';
      }
    }

    &__top {
      white-space: nowrap;
      border-bottom: 2px solid #494251;
    }

    &__find {
      width: 97px;
      background-color: #494251;
      margin: 0;
      font-size: 14px;
      padding: 13px 10px;
      border: none;
      color: white;
      display: inline-block;
      cursor: pointer;
      transition: .3s opacity ease-in-out;

      &:hover {
        opacity: .5;
      }

      &:active {
        opacity: .8;
      }
    }
  }
</style>
