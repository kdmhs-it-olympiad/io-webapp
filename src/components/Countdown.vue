<script>
import { Component, Vue } from 'vue-property-decorator';
import { AsyncComputed } from '@/decorators';
import CalenderAPI from '@/api/calender';

@Component
class Countdown extends Vue {

  @AsyncComputed({ default: '지금은요...' })
  async context() {
    const cal = await CalenderAPI.schedule();
    const data = cal.status === 200
      ? cal.data.context
      : '알수 없어요';

    return data;
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
