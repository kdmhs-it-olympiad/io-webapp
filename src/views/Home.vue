<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Jumbo: () => import('@/components/Jumbo.vue'),
  },
})
class Home extends Vue {

}

export default Home;
</script>

<template>
  <div class="Home">
    <jumbo></jumbo>
  </div>
</template>

<style lang="scss">
  .Home {
  }
</style>
