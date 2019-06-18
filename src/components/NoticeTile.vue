<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Tile: () => import('@/components/Tile.vue'),
    NoticeItem: () => import('@/components/NoticeItem.vue'),
  },
})
class NoticeTile extends Vue {

}

export default NoticeTile;
</script>

<template>
  <tile
    id="notice-tile"
    class="Notice"
    title="공지사항">

    <notice-item :date="new Date(1560835611934)">
      신청 확인은 2019년 6월 19일 13시부터 확인 가능합니다.
    </notice-item>

    <notice-item :date="new Date(1560635611934)">
      이 사이트는 인터넷 익스플로러(IE)를 제외한 다른 브라우저에 최적화되어 있습니다. 만약 IE를 사용중이시라면 완벽한 경험을 위해 <a href="https://chrome.google.com" target="_blank">이 브라우저</a>를 다운로드받아 사용해 주세요.
    </notice-item>

    <template slot="footer">
        <!-- <router-link class="Notice__link" to="/">공지사항 전체보기</router-link> -->
    </template>
  </tile>
</template>

<style lang="scss">
  @import '../styles/color';

  .Notice {
    background-color: $notice__back;

    &__link {
      color: $tile__font;
      font-weight: bold;
      float: right;
    }
  }
</style>
