<script>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
class PageHero extends Vue {
  @Prop({ type: String }) text;
}

export default PageHero;
</script>

<template>
  <div class="PageHero">
    <h1 class="PageHero__text">{{text}}</h1>
  </div>
</template>

<style lang="scss">
  .PageHero {
    animation: 0.5s white-to-black forwards;
    padding-left: 120px;
    overflow: auto;
    &__text {
      font-size: 48px;
      color: white;
      font-weight: 800;
      margin: 80px 0;
    }
  }

  @keyframes white-to-black {
    from {
      background-color: transparent;
    }

    to {
      background-color: #31283c;
    }
  }
</style>
