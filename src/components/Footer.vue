<template>
  <div class="Footer">
    <p class="Footer__copyright">
      <strong>
        Copyright © 2017-2019 Korea Digital Media High School.
        All Rights Reserved.
      </strong>
    </p>
    <p class="Footer__information">
      경기도 안산시 단원구 사세충열로 94 한국디지털미디어고등학교 /
      교무실 : 031)363-7893 / 행정실 : 031)363-7873 / 팩스 : 031)402-8363<br>
      한국디지털미디어고등학교 대회 신청 페이지 개발 : 이준환, 진준기, 최찬환, 박성민, 엄서훈 / 담당교사 : 임재훈<br>
      개인정보보호책임자 : 임재훈 / <a href="/policy" target="_blank">개인정보 처리방침</a>
    </p>
  </div>
</template>

<style lang="scss">
  @import '../styles/color';

  .Footer {
    background-color: $footer__back;
    padding: 64px 120px;

    a {
        color: #494251;
    }

    @media (max-width: 1080px) {
      padding: 40px 20px;
    }

    &__copyright {
      font-size: 16px;
      line-height: 22px;
      color: $footer__font--copyright;

      margin-bottom: 12px;

      @media (max-width: 1080px) {
        font-size: 14px;
      }
    }

    &__information {
      font-size: 14px;
      line-height: 22px;
      color: $footer__font--info;

      @media (max-width: 1080px) {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
</style>
