<script>
import { Component, Vue } from 'vue-property-decorator';
import Tile from './Tile.vue';
import NoticeItem from './NoticeItem.vue';

@Component({
  components: {
    Tile,
    NoticeItem,
  },
})
class NoticeTile extends Vue {

}

export default NoticeTile;
</script>

<template>
  <tile
    id="notice-tile"
    class="Notice-Tile"
    title="공지사항">

    <notice-item :date="new Date(1562499177433)">
      컴퓨터그래픽, 창업아이템 부문 예선 과제는 7월 8일 오전 10시 30분에 공개됩니다.
    </notice-item>

    <notice-item :date="new Date(1561014004226)">
      컴퓨터그래픽 부문과 창업아이템 부문의 사전예선과제는 7월 8일(월) 오전 10시에 대회홈페이지에 공개됩니다.
      제출은 7월 14일(일) 오후 6시까지 입니다.
    </notice-item>

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

<style lang="scss" scoped>
  @import '../styles/color';

  .Notice-Tile {
    background-color: $notice__back;

    &__link {
      color: $tile__font;
      font-weight: bold;
      float: right;
    }
  }
</style>
