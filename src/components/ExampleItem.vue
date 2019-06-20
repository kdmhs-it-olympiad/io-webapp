<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
class ExampleItem extends Vue {
  @Prop({ type: String, default: '' }) title;

  @Prop({ type: Boolean }) long;

  get contestClasses() {
    return {
      ExampleItem__contents: true,
      'ExampleItem__contents--long': this.long,
    };
  }
}

export default ExampleItem;
</script>

<template>
  <div class="ExampleItem">
    <h5 class="ExampleItem__title">{{ title }}</h5>

    <div :class="contestClasses">
      <div class="ExampleItem__description">
        <slot name="description"></slot>
      </div>
      <div class="ExampleItem__link">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../styles/color';

  .ExampleItem {
    color: $tile__font;
    font-size: 16px;

    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    &__title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;

      @media (max-width: 780px) {
        font-size: 16px;
        margin-bottom: 8px;
      }
    }

    &__contents {
      display: flex;
      font-size: 16px;

      @media (max-width: 780px) {
        flex-flow: column nowrap;

        p {
          margin-bottom: 10px;
        }
      }

      &--long {
        flex-flow: column nowrap;

        p {
          margin-bottom: 10px;
        }
      }
    }

    &__description {
      margin-right: 8px;
      line-height: 1.5;
    }

    &__link {
      font-weight: bold;
      text-decoration: underline;

      * {
        color: $tile__font;
      }
    }
  }
</style>
