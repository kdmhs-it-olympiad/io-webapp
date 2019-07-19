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
          프로그래밍 부문 본선대회 : 2019. 7. 25.(목) <br>
        09:00~09:30 개막식(신관 4층 대강당)<br>
        09:30~09:40 필기 고사장 입실(본관 1,2층)<br>
        10:00~11:20 1차 필기<br>
        11:30~12:20 채점 및 점심식사<br>
        12:20~12:40 2차 실기 진출자 발표(본관 중앙현관 앞)<br>
                    - 실기 진출자 외에 귀가<br>
        12:40~13:10 실기 고사장 입실 및 PC 확인<br>
        13:20~13:30 수험자 확인<br>
        13:30~16:30 2차 실기<br>
        이후 귀가
      </p>
      <!-- <a slot="link" href="#">예시 문항 보러가기</a> -->
    </example-item>

    <example-item title="창업 아이템" long>
      <p slot="description">
          컴퓨터그래픽 부문 본선대회 : 2019. 7. 25.(목)<br>
        09:00~09:30 개막식(신관 4층 대강당)<br>
        09:30~09:40 실기 고사장 입실(본관 2층 디지털콘텐츠실)<br>
        09:40~10:00 수험자 확인 및 PC 확인<br>
        10:00~12:30 본선 과제 수행 및 제출<br>
        이후 귀가
      </p>
      <!-- <a slot="link" href="#">예선 파일 제출 양식 다운로드</a> -->
    </example-item>

    <example-item title="컴퓨터 그래픽">
      <p slot="description">
        창업아이템 부문 본선대회 : 2019. 7. 25.(목)<br>
        09:00~09:30 개막식(신관 4층 대강당)<br>
        09:30~09:40 1차 고사장 입실(신관 2층 멀티미디어실)<br>
        09:40~10:00 수험자 확인 및 PC 확인<br>
        10:00~12:30 1차 과제 수행 및 제출<br>
        12:40~13:10 채점 및 점심식사<br>
        13:20~13:30 2차 프리젠테이션 진출자 발표<br>
                    - 2차 프리젠테이션 진출자 외에 귀가<br>
        13:30~13:50 대기실 입실 및 수험자 확인<br>
        14:00~16:30 2차 프리젠테이션 발표<br>
        이후 귀가 
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
