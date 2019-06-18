<script>
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
import Jumbo from '@/components/Jumbo.vue';
import TileBox from '@/components/TileBox.vue';
import NoticeTile from '@/components/NoticeTile.vue';
import EventExampleTile from '@/components/EventExampleTile.vue';
import Countdown from '@/components/Countdown.vue';

@Component({
  components: {
    Navbar,
    Jumbo,
    TileBox,
    NoticeTile,
    EventExampleTile,

    ApplyModal: () => import('@/components/ApplyModal.vue'),
    ApplyCheckModal: () => import('@/components/ApplyCheckModal.vue'),

    Countdown,
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
      @request-open-apply-check-modal="applyCheckModalVisible = true" />

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
