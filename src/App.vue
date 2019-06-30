<script>
import { Component, Vue } from 'vue-property-decorator';
import IoFooter from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import PageHero from '@/components/PageHero.vue';

@Component({
  components: {
    IoFooter,
    Navbar,
    PageHero,
  },
})
class App extends Vue {
  navbar = {
    invert: false,
  };

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
      <navbar
        v-if="!$route.path.includes('admin')"
        :dark="$store.state.pageHero.show"></navbar>
      <page-hero
        v-if="$store.state.pageHero.show"
        :text="$store.state.pageHero.text"></page-hero>
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
