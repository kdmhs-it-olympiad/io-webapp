<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    IoFooter: () => import('@/components/Footer.vue'),
  },
})
class App extends Vue {
  get isIE() {
    const agent = navigator.userAgent.toLowerCase();

    return (
      navigator.appName === 'Netscape'
      && navigator.userAgent.search('Trident') !== -1
    )
    || (
      agent.indexOf('msie') !== -1
    );
  }
}

export default App;
</script>

<template>
  <div class="App">
    <div class="App__contents" v-if="!isIE">
      <router-view></router-view>
    </div>

    <div v-else>
        IE는 지원하지 않습니다.
        <a href="https://chrome.google.com" target="_blank">
          대체 브라우저 다운로드
        </a>
    </div>
    <io-footer v-if="!isIE"></io-footer>
  </div>
</template>

<style lang="scss">
  .App {
    &__contents {
      min-height: calc(100vh - 206px);
    }
  }
</style>
