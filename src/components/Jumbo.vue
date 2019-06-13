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
      <p class="Jumbo__cp">도전하세요. 그리고 도약하세요.<br>전국 중학생 IT 올림피아드는 여러분을 <span>기다리고 있습니다.</span></p>

      <div class="Jumbo__action">
        <io-button black ghost>신청 확인하기</io-button>
        <io-button black>참가 신청하기 <i class='bx bx-fw bx-right-arrow-alt'></i></io-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .Jumbo {
    padding: 108px 125px 172px 125px;

    background: url('/images/jumbo-image.svg');
    background-position: right bottom;
    background-repeat: no-repeat;
    color: #31283c;

    @media (max-width: 780px) {
      padding: 54px 20px 102px 20px;

      background: url('/images/jumbo-image-mobile.svg');
      background-position: right calc(100% - 130px);
      background-size: 150px;
      background-repeat: no-repeat;
    }

    &__inner {

    }

    &__action {
      margin-top: 80px;

      @media(max-width: 780px) {
        margin-top: 48px;
      }

      button {
        margin-right: 20px;

        @media(max-width: 780px) {
          margin-right: 10px;
        }
      }

      i {
        padding-top: 2px;
        width: 21px;
      }
    }

    &__cp {
      font-size: 16px;
      line-height: 24px;

      @media (max-width: 780px) {
        font-size: 14px;
        line-height: 22px;

        span {
          display: block;
        }
      }
    }

    &__title {
      font-size: 80px;
      font-weight: bold;
      line-height: 100px;
      margin: 24px 0;

      @media (max-width: 780px) {
        font-size: 40px;
        line-height: 48px;
        margin: 16px 0;
      }
    }

    &__school {
      font-size: 24px;

      @media (max-width: 780px) {
        font-size: 14px;
      }
    }
  }
</style>
