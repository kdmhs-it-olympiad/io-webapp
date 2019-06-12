<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
class Navbar extends Vue {

}

export default Navbar;
</script>

<template>
  <div class="Navbar">
    <div class="Navbar__inner">
      <router-link class="Navbar__brand" to="/">
        <img src="@/assets/icon-medal.svg">
        <p>전국 중학생 IT 올림피아드</p>
      </router-link>

      <ul class="Navbar__links">
        <li><a href="#">종목안내</a></li>
        <li><a href="#">행사일정</a></li>
        <li><a href="#">공지사항</a></li>
        <li><a href="#">질문과 답변</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  .Navbar {
    padding: 21px 120px;

    @media (max-width: 640px) {
      padding: 13px 20px;
    }

    &__inner {
      height: 22px;
    }

    &__brand {
      height: 22px;
      float: left;
      display: flex;
      flex-flow: row nowrap;

      color: #31283c;
      text-decoration: none;

      p {
        font-size: 16px;
        font-weight: bold;
        line-height: 22px;
        margin-left: 8px;

        @media (max-width: 640px) {
          display: none;
        }
      }
    }

    &__links {
      float: right;

      li {
        font-size: 16px;
        line-height: 22px;
        float: left;
        padding-left: 40px;
        color: #494251;
        transition: .3s opacity ease-in-out;
        cursor: pointer;

        @media (max-width: 640px) {
          padding-left: 12px;
        }

        a {
          text-decoration: none;
          color: black;
        }

        &:hover {
          opacity: .6;
        }

        &:active {
          opacity: .8;
        }
      }
    }
  }
</style>
