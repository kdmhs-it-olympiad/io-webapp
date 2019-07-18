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

    <notice-item :date="new Date(1563414333571)">
      [창업아이템 부문 / 컴퓨터그래픽 부문 예선 통과자 발표 안내]<br>
      안녕하세요. 대회 응시를 통해 꿈과 열정을 보여준 모든 학생들에게 감사의 말씀을 드립니다.<br>
      오늘 오전 10시 발표예정이었던 본선진출자 발표는 심사결과 처리 관계로 부득이 오후 2시로 변경되었습니다. 조금만 더 기다려주시면 감사하겠습니다.
    </notice-item>

    <notice-item :date="new Date(1563032357702)">
      컴퓨터 그래픽 부문은 1차 예선 과제를 모두 이메일로 제출해주시기 바랍니다
    </notice-item>

    <notice-item :date="new Date(1562763587575)">
      [컴퓨터그래픽 부문 추가 공지] - 이메일 제출시 파일명 변경 안내<br>
      올해 예선에서 수험번호가 부여되지 않는 관계로 파일명을 아래와 같이 해서 제출해주시기 바랍니다.<br>
      <br>
      이름-학생전화번호끝4자리.psd<br>
      이름-학생전화번호끝4자리.jpg<br>
      <br>
      예) 전화번호 끝 4자리가 7800인 경우 : 고디미-7800.psd / 고디미-7800.jpg
    </notice-item>

    <notice-item :date="new Date(1562760342888)">
      [컴퓨터그래픽 추가 공지]<br>
      1. 컬러모드는 CMYK 또는 RGB로 제작하세요.<br>
      2. 해상도는 300DPI로 제작합니다.<br>
      3. 제작크기는 첨부된 파일의 계획서를 참고하세요.
    </notice-item>

    <notice-item :date="new Date(1562562009113)">
      [창업아이템 1차 예선 과제]<br>
      <a href="https://drive.google.com/uc?export=download&id=1mVOVB1i596PWlzxkjmmRiah8h-hK_fYB">다운로드</a>
    </notice-item>

    <notice-item :date="new Date(1562555754919)">
      [컴퓨터그래픽 1차 예선 과제]<br>
      <a href="https://drive.google.com/uc?export=download&id=11flyqq8XEPvU7Wp_McRIRYBOu7IWOc5x">예선 문제</a><br>
      <a href="https://drive.google.com/uc?export=download&id=14iwGM1Tiu8ePv5wvQFDP5YX8t5zgn3LD">예선 데이터</a><br>
      <br>
      창업아이템 부문 예선 과제는 다시 공지하도록 하겠습니다.
    </notice-item>

    <notice-item :date="new Date(1562549689743)">
      [컴퓨터그래픽부문 예선 공지 연기]<br>
      컴퓨터그래픽 부분 예선을 위한 과제와 파일은 8일 오후 12시에 공지가 될 예정입니다.<br>
      아울러 예선 과제와 파일이 늦게 업로드되는 만큼 제출마감시한은 연장해드릴 예정입니다.
    </notice-item>

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
