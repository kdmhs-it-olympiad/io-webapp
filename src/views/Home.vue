<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Navbar: () => import('@/components/Navbar.vue'),
    Jumbo: () => import('@/components/Jumbo.vue'),
    TileBox: () => import('@/components/TileBox.vue'),
    NoticeTile: () => import('@/components/NoticeTile.vue'),
    EventExampleTile: () => import('@/components/EventExampleTile.vue'),

    ApplyModal: () => import('@/components/ApplyModal.vue'),
    ApplyCheckModal: () => import('@/components/ApplyCheckModal.vue'),

    Countdown: () => import('@/components/Countdown.vue'),
  },
})
class Home extends Vue {
  applyModalVisible = false;
  applyCheckModalVisible = false;

  ready() {
    alert('준비중입니다.');
  }
}

export default Home;
</script>

<template>
  <div class="Home">
    <navbar></navbar>
    <jumbo
      @request-open-apply-modal="applyModalVisible = true"
      @request-open-apply-check-modal="ready" />

    <countdown></countdown>

    <tile-box>
      <event-example-tile></event-example-tile>
      <notice-tile></notice-tile>
    </tile-box>

    <apply-modal :visible.sync="applyModalVisible"></apply-modal>
    <apply-check-modal :visible.sync="applyCheckModalVisible"></apply-check-modal>
  </div>
</template>

<style lang="scss">
  .Home {
  }
</style>
