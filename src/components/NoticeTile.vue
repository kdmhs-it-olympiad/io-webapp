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

    <notice-item :date="new Date(1563429940854)">
      [창업아이템 부문 본선진출자 발표]<br><br>
      본선진출을 축하합니다<br>
      수험번호 확인 및 수험표는 19일(금) 오후 5시부터 대회홈페이지에서 출력할 수 있습니다. <br>
      대회일에 반드시 수험표를 출력 지참하여 주시기 바랍니다. <br><br>
      강*상 경기 대*중학교<br>
      김*환 경기 안*중학교<br>
      김*훈 경기 범*중학교<br>
      김*언 경기 신*중학교<br>
      김*준 경기 광*북중학교<br>
      류*태 충북 충주*덕중학교<br>
      마*영 강원 율*중학교<br>
      문*빈 경기 안*중학교<br>
      박*혁 대구 매*중학교<br>
      박*현 경기 고*중학교<br>
      박*성 경기 안*중학교<br>
      배*희 전북 화*중학교<br>
      안*현 경기 안*중학교<br>
      오*용 경기 서*중학교<br>
      이*우 경기 안*중학교<br>
      이*윤 경기 안*중학교<br>
      이*민 경남 진*남중학교<br>
      이*용 경기 안*중학교<br>
      조*재 경기 안*중학교<br>
      조*우 경기 솔*중학교<br>
      최*서 경기 별*중학교<br>
      한*명 경기 범*중학교<br>
      홍*환 경기 석*중학교<br>
      황*상 대전 대전*방중학교<br>
    </notice-item>

    <notice-item :date="new Date(1563429940854)">
      [컴퓨터그래픽 부문 본선진출자 발표]<br><br>
      본선진출을 축하합니다<br>
      수험번호 확인 및 수험표는 19일(금) 오후 5시부터 대회홈페이지에서 출력할 수 있습니다. <br>
      대회일에 반드시 수험표를 출력 지참하여 주시기 바랍니다. <br><br>
      고*선 경기 산*중학교<br>
      구*영 경기 안산성*중학교<br>
      김*영 경기 구*중학교<br>
      김*정 전북 남원하*중학교<br>
      김*하 서울 서울상*중학교<br>
      김*우 경기 구*중학교<br>
      김*욱 경기 선*중학교<br>
      모*현 경기 서*중학교<br>
      박*지 경기 안산중*중학교<br>
      박*은 경기 안산해*중학교<br>
      박*경 서울 고*중학교<br>
      배*영 경기 안산성*중학교<br>
      서*진 서울 세*여자중학교<br>
      소*수 서울 서울신*중학교<br>
      손*민 경기 덕*중학교<br>
      송*진 대전 대전장*중학교<br>
      신*재 경기 이*중학교<br>
      오*근 경기 퇴*원중학교<br>
      유*진 경기 풍*중학교<br>
      유*해 대구 대구경*중학교<br>
      윤*서 경기 시흥매*중학교<br>
      이*애 경기 안*여자중학교<br>
      이*윤 세종 한*중학교<br>
      이*원 경기 과*중학교<br>
      장*혁 경북 형*중학교<br>
      전*영 경기 평*중학교<br>
      조*혁 경기 함*중학교<br>
      조*준 경기 수원칠*중학교<br>
      최*성 경기 궁*중학교<br>
      홍*영 경기 대*여자중학교<br>
    </notice-item>

    <notice-item :date="new Date(1563414333571)">
      [창업아이템 부문 / 컴퓨터그래픽 부문 예선 통과자 발표 안내]<br>
      안녕하세요. 대회 응시를 통해 꿈과 열정을 보여준 모든 학생들에게 감사의 말씀을 드립니다.<br>
      오늘 오전 10시 발표예정이었던 본선진출자 발표는 심사결과 처리 관계로 부득이 오후 2시로 변경되었습니다. 조금만 더 기다려주시면 감사하겠습니다.
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
