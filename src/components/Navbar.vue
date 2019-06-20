<script>
import { Component, Vue } from 'vue-property-decorator';
import Medal from '@/assets/icon-medal.svg';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['navbar']),
  },
  components: {
    Medal,
  },
})
class Navbar extends Vue {
  ready() {
    alert('준비중입니다.');
  }
}

export default Navbar;
</script>

<template>
  <div :class="{
    'Navbar': true,
    'Navbar--invert': navbar.invert,
  }">
    <div class="Navbar__inner">
      <router-link :class="{
        'Navbar__brand': true,
        'Navbar__brand--invert': navbar.invert,
      }" to="/">
        <medal :style="{
          fill: navbar.invert ? 'white' : 'black',
        }"></medal>
        <p>전국 중학생 IT 올림피아드</p>
      </router-link>

      <ul :class="{
        'Navbar__links': true,
        'Navbar__links--invert': navbar.invert,
      }">
        <li><a href="/#example-tile">종목안내</a></li>
        <li><router-link to="/info">대회 정보</router-link></li>
        <li><a href="/#notice-tile">공지사항</a></li>
        <li><router-link to="/qna">질문과 답변</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  .Navbar {
    padding: 21px 120px;
    transition: background-color 0.5s;

    @media (max-width: 780px) {
      padding: 13px 20px;
    }

    &--invert {
      background-color: #31283c;
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

        @media (max-width: 1080px) {
          display: none;
        }
      }
    }

    &__brand--invert {
      color: white;
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

        @media (max-width: 780px) {
          padding-left: 12px;
          font-size: 14px;
        }

        a {
          text-decoration: none;
          color: #494251;
        }

        &:hover {
          opacity: .6;
        }

        &:active {
          opacity: .8;
        }
      }
    }

    &__links--invert {
      li {
        color: white;

        a {
          color: white;
        }
      }
    }
  }
</style>
