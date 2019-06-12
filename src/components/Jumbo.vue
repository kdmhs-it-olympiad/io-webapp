<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    IoButton: () => import('@/components/IoButton.vue'),
  },
})
class Jumbo extends Vue {

}

export default Jumbo;
</script>

<template>
  <div class="Jumbo">
    <div class="Jumbo__inner">
      <p class="Jumbo__school">한국디지털미디어고등학교</p>
      <h1 class="Jumbo__title">전국 중학생<br>IT 올림피아드</h1>
      <p class="Jumbo__cp">도전하세요. 그리고 도약하세요.<br>전국 중학생 IT 올림피아드는 여러분을 기다리고 있습니다.</p>

      <div class="Jumbo__action">
        <io-button black ghost>신청 확인하기</io-button>
        <io-button black>참가 신청하기 <i class='bx bx-fw bx-right-arrow-alt'></i></io-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .Jumbo {
    padding: 172px 125px;

    background: url('/images/jumbo-image.svg');
    background-position: right bottom;
    background-repeat: no-repeat;

    &__inner {

    }

    &__action {
      margin-top: 80px;

      button {
        margin-right: 20px;
      }

      i {
        padding-top: 2px;
        width: 21px;
      }
    }

    &__cp {
      font-size: 16px;
      line-height: 24px;
    }

    &__title {
      font-size: 80px;
      font-weight: bold;
      line-height: 100px;
      margin: 24px 0;
    }

    &__school {
      font-size: 24px;
    }
  }
</style>
