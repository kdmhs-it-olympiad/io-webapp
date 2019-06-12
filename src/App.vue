<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    IoFooter: () => import('@/components/Footer.vue'),
  },
})
class App extends Vue {

}

export default App;
</script>

<template>
  <div class="App">
    <router-view></router-view>
    <io-footer></io-footer>
  </div>
</template>

<style lang="scss">
  .App {
  }
</style>
