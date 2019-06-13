<script>
import { Component, Vue } from 'vue-property-decorator';
import { AsyncComputed } from '@/decorators';

@Component
class Countdown extends Vue {
  @AsyncComputed()
  async context() {
    return 'function countdown() {[time]}';
  }
}

export default Countdown;
</script>

<template>
  <div class="Countdown">
    <p class="Countdown__description"><strong>{{ context }}</strong></p>
  </div>
</template>

<style lang="scss">
  @import '../styles/color';

  .Countdown {
    text-align: center;
    color: white;
    background-color: $countdown__back;

    padding: 80px 10px;

    &__description {
      font-size: 32px;
    }

    &__schedule {
      font-size: 16px;
      color: white;
    }
  }
</style>
