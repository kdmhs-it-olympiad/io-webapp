<script>
import { Component, Vue } from 'vue-property-decorator';
import Jumbo from '@/components/Jumbo.vue';
import TileBox from '@/components/TileBox.vue';
import NoticeTile from '@/components/NoticeTile.vue';
import EventExampleTile from '@/components/EventExampleTile.vue';
import Countdown from '@/components/Countdown.vue';
import PosterPopup from '@/components/PosterPopup.vue';

@Component({
  components: {
    Jumbo,
    TileBox,
    NoticeTile,
    EventExampleTile,

    PosterPopup,
    ApplyModal: () => import('@/components/ApplyModal.vue'),
    ApplyCheckModal: () => import('@/components/ApplyCheckModal.vue'),

    Countdown,
  },
})
class Home extends Vue {
  applyModalVisible = false;

  applyCheckModalVisible = false;

  posterPopup = false;

  mounted() {
    this.$store.commit('updateNavbar', { invert: false });
    if (this.$store.state.isPopupOpened) return;

    setTimeout(() => {
      this.posterPopup = true;
      this.$store.commit('popupOpened');
    }, 1000);
  }

  ready() {
    alert('준비중입니다.');
  }
}

export default Home;
</script>

<template>
  <div class="Home">
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
    <poster-popup :visible.sync="posterPopup"></poster-popup>
  </div>
</template>

<style lang="scss">
  .Home {
  }
</style>
