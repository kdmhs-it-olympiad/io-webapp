<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
    Jumbo: () => import('@/components/Jumbo.vue'),
    TileBox: () => import('@/components/TileBox.vue'),
    NoticeTile: () => import('@/components/NoticeTile.vue'),
    EventExampleTile: () => import('@/components/EventExampleTile.vue'),

    Countdown: () => import('@/components/Countdown.vue'),
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
    
    <countdown></countdown>

    <tile-box>
      <event-example-tile></event-example-tile>
      <notice-tile></notice-tile>
    </tile-box>
  </div>
</template>

<style lang="scss">
  .Home {
  }
</style>
