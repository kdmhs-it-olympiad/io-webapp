<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Tile: () => import('@/components/Tile.vue'),
    ExampleItem: () => import('@/components/ExampleItem.vue'),
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
      <p slot="description">C언어로 프로그래밍 문제를 해결합니다.</p>
      <!-- <a slot="link" href="#">예시 문항 보러가기</a> -->
    </example-item>

    <example-item title="창업 아이템" long>
      <p slot="description">새로운 창업 구상을 사업성과 창의성을 심사 받습니다.</p>
      <!-- <a slot="link" href="#">예선 파일 제출 양식 다운로드</a> -->
    </example-item>

    <example-item title="컴퓨터 그래픽">
      <p slot="description">독창적이고 미려한 작품을 평가 받습니다.</p>
      <!-- <a slot="link" href="#">예선 과제 다운로드</a> -->
    </example-item>
  </tile>
</template>

<style lang="scss">
  @import '../styles/color';

  .EventExample {
  }
</style>
