<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
    Jumbo: () => import('@/components/Jumbo.vue'),
  },
})
class Home extends Vue {

}

export default Home;
</script>

<template>
  <div class="Home">
    <navbar></navbar>
    <jumbo></jumbo>
  </div>
</template>

<style lang="scss">
  .Home {
  }
</style>
