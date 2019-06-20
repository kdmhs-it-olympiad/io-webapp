<script>
import { Component, Vue } from 'vue-property-decorator';
import Tile from './Tile.vue';
import ExampleItem from './ExampleItem.vue';

@Component({
  components: {
    Tile,
    ExampleItem,
  },
})
class EventExampleTile extends Vue {

}

export default EventExampleTile;
</script>

<template>
  <tile
    id="example-tile"
    class="EventExample"
    title="종목 안내">

    <example-item title="프로그래밍">
      <p slot="description">
        본선대회: 2019. 7. 25(목) 09:00∼17:00 (8시간)
      </p>
      <!-- <a slot="link" href="#">예시 문항 보러가기</a> -->
    </example-item>

    <example-item title="창업 아이템" long>
      <p slot="description">
        본선대회: 2019. 7. 25(목) 09:00∼17:00 (8시간)<br>
        예선 과제 공개: 2019. 7. 8(월) 10:00 부터<br>
        예선 과제 제출: 2019. 7. 14(일) 18:00 까지<br>
        본선진출자 발표일: 2019. 7. 18(목) 10:00<br>
      </p>
      <!-- <a slot="link" href="#">예선 파일 제출 양식 다운로드</a> -->
    </example-item>

    <example-item title="컴퓨터 그래픽">
      <p slot="description">
        본선대회: 2019. 7. 25(목) 09:00∼12:30<br>
        예선 과제 공개: 2019. 7. 8(월) 10:00 부터<br>
        예선 과제 제출: 2019. 7. 14(일) 18:00 까지<br>
        본선진출자 발표일: 2019. 7. 18(목) 10:00<br>
      </p>
      <!-- <a slot="link" href="#">예선 과제 다운로드</a> -->
    </example-item>
  </tile>
</template>

<style lang="scss">
  @import '../styles/color';

  .EventExample {
  }
</style>
