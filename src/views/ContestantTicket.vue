<script>
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import IoButton from '@/components/IoButton.vue';

import stamp from '@/assets/img/stamp.png';
// import officialDocs from '@/assets/img/official_docs.jpeg';

import print from 'print-js';

@Component({
  components: {
    IoButton,
  },
})
class ContestantTicket extends Vue {
  @Prop({ type: Object }) profile;

  created() {
    if (!this.$route.params.profile) {
      alert('비정상적으로 접근하셨습니다.');
      this.$router.go(-1);
    }
  }

  // get officialDocs() {
  //   return officialDocs;
  // }

  get stamp() {
    return stamp;
  }

  get computedSector() {
    if (this.profile.sector === 'business') return '창업 아이템';
    if (this.profile.sector === 'design') return '그래픽';
    if (this.profile.sector === 'programming') return '프로그래밍';

    return '알 수 없음';
  }

  printTicket() {
    print({
      printable: 'Ticket',
      type: 'html',
      documentTitle: '제15회 전국 중학생 올림피아드 수험표',
      css: '/print.css',
    });
  }
}

export default ContestantTicket;
</script>

<template>
  <div>
    <div class="Ticket__button">
      <io-button
        @click="printTicket"
      >
        수험표 출력하기
      </io-button>
    </div>
    <div
      id="Ticket"
      class="Ticket"
    >
      <table
        class="Ticket__table"
      >
        <thead>
          <th
            class="Ticket__title"
            colspan="2"
          >
            <p>제15회 전국 중학생 올림피아드 수험표</p>
          </th>
        </thead>
        <tbody
          class="Ticket__info"
        >
          <tr>
            <td colspan="2">
              <img
                class="Ticket__photo"
                :src="`https://file.choich.space/photo/${profile.photo}`"
              >
            </td>
          </tr>
          <tr>
            <td class="Ticket__cell">수험번호</td>
            <td class="Ticket__cell">{{ profile.ticketNumber }}</td>
          </tr>
          <tr class="Ticket__cell">
            <td class="Ticket__cell">이름</td>
            <td class="Ticket__cell">{{ profile.name }}</td>
          </tr>
          <tr>
            <td class="Ticket__cell">시험부문</td>
            <td class="Ticket__cell">{{ `${computedSector} 부문` }}</td>
          </tr>
          <tr>
            <td class="Ticket__cell">출신학교</td>
            <td class="Ticket__cell">{{ profile.school }}</td>
          </tr>
          <tr>
            <td class="Ticket__cell">학년</td>
            <td class="Ticket__cell">{{ profile.grade }}</td>
          </tr>
          <tr>
            <td class="Ticket__cell">반</td>
            <td class="Ticket__cell">{{ profile.class }}</td>
          </tr>
        </tbody>
        <tfoot>
          <th colspan="2">
            <img
              class="Ticket__stamp"
              :src="stamp"
            >
          </th>
        </tfoot>
      </table>
      <div class="Ticket__info">
        <p> * 시험 주의사항</p>
        <p>&nbsp;&nbsp;&nbsp;준비물 : <strong>필기도구, 신분증, 수험표 (필수 지참)</strong></p>
        <p>&nbsp;&nbsp;&nbsp;개회식 : 2019.7.25.(목) 오전 9시, 본교 신관 4층 대강당</p>
        <p>&nbsp;&nbsp;&nbsp;장소 : 경기도 안산시 단원구 사세충열로 94 한국디지털미디어고등학교</p>
        <p>&nbsp;&nbsp;&nbsp;시험장은 교내에서 확인 가능합니다.</p>
        <p>&nbsp;&nbsp;&nbsp;더 자세한 내용은 https://contest.dimigo.hs.kr 에서 확인 하실 수 있습니다.</p>

        <!-- <img
          class="Ticket__docs"
          :src="officialDocs"
        > -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
table, th, td, tr{
  border-collapse: collapse;
  border: 1px solid #c4c4c4;
}

.Ticket {
  height: 100%;
  width: 100%;

  &__title {
    width: 120%;
    padding: 15px;
  }

  &__photo {
    width: 3.5cm;
    height: 4.5cm;
  }

  &__info {
    text-align: center;
    line-height: 1.5rem;
  }

  &__table {
    margin: 30px auto;
  }

  &__cell {
    text-align: center;
    padding: 10px;
  }

  &__button {
    margin: 40px auto;
    text-align: center;
  }

  &__alert {
    padding: 0 15px;
    line-height: 1.6rem;
    text-align: center;
  }

  &__stamp {
    height: 150px;
  }

  &__docs {
    width: 793.700787px;
  }
}
</style>
