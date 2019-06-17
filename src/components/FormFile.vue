<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VModel } from '@/decorators';

@Component
class FormFile extends Vue {
  @Prop({ type: String }) name;

  @Prop({ type: String }) label;

  @Prop({ type: String }) button;

  @Prop({ type: String }) placeholder;

  @Prop({ type: String }) description;

  @Prop({ type: String }) error;

  @Prop({ type: String, default: '' }) files;

  @Prop({ type: Boolean, default: false }) validate;

  @VModel() model;

  file = null;

  get filename() {
    if (!this.file) return '';

    return this.file.name || '';
  }

  processFile(event) {
    [this.model] = event.target.files;
  }

  get imagenameClasses() {
    return {
      FormFile__imagename: true,
      'FormFile__imagename--placeholder': !this.filename,
    };
  }
}

export default FormFile;
</script>

<template>
  <div class="FormFile">
    <p class="FormFile__label">{{ label }}</p>

    <div
      class="FormFile__container"
      :class="{ 'FormFile__container--error': validate }">
      <div :class="imagenameClasses">
        <p>
          <span v-if="filename">{{ filename }}</span>
          <span v-else>{{ placeholder }}</span>
        </p>
      </div>

      <div class="FormFile__button__wrapper">
        <label :for="name">
          <div class="FormFile__button">
            {{ button }}
          </div>
        </label>
      </div>

      <input
        :id="name"
        :accept="files"
        class="FormFile__input"
        type="file"
        @change="processFile($event)">
    </div>

    <p class="FormFile__error" v-if="validate">{{ error }}</p>
    <p class="FormFile__description">{{ description }}</p>
  </div>
</template>

<style lang="scss">
  .FormFile {

    &__container {
      border: 2px solid #494251;

      &--error {
        border-color: #ff6255;
      }

      & > * {
        display: inline-block;
      }
    }

    &__label {
      font-size: 14px;
      margin-bottom: 8px;
    }

    &__imagename {
      box-sizing: border-box;
      font-size: 14px;
      padding: 10px 13px;
      border: none;
      pointer-events: none;
      width: calc(100% - 105px);

      p {
        overflow: hidden;
        font-size: 14px;
      }

      span {
        white-space: nowrap;
        font-size: 14px;
      }


      &--placeholder {
        opacity: .7;
      }
    }

    &__error {
      margin-top: 8px;
      font-size: 12px;
      color: #ff6255;
    }

    &__description {
      margin-top: 8px;
      font-size: 12px;
      line-height: 14px;
      color: #7f7788;
    }

    &__button {
      padding: 13px 12px;
      font-size: 14px;
      color: white;
      background-color: #494251;

      &__wrapper {
        width: 105px;
      }
    }

    &__input {
      display: none;
    }
  }
</style>
