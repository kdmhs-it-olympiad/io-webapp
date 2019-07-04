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
    if (this.$store.state.isPopupOpened) return;

    setTimeout(() => {
      this.posterPopup = true;
      this.$store.commit('popupOpened');
    }, 1000);
  }

  ready() {
    alert('준비중입니다.');
  }

  openApplyModal() {
    const today = new Date();
    const deadline = new Date('2019', '6', '8', '18');

    if (today >= deadline) {
      alert('예선 신청이 마감되었습니다.');
      return;
    }

    this.applyModalVisible = true;
  }
}

export default Home;
</script>

<template>
  <div class="Home">
    <jumbo
      @request-open-apply-modal="openApplyModal"
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

<style lang="scss" scoped>
  .Home {
  }
</style>
