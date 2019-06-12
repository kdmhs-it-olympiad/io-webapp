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
    <div class="App__contents">
      <router-view></router-view>
    </div>
    <io-footer></io-footer>
  </div>
</template>

<style lang="scss">
  .App {
    &__contents {
      min-height: calc(100vh - 206px);
    }
  }
</style>
