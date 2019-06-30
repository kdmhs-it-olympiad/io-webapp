<script>
import { Component, Vue } from 'vue-property-decorator';

@Component()
class AdminWrapper extends Vue {

}

export default AdminWrapper;
</script>

<template>
  <div class="AdminWrapper">
    <div class="AdminWrapper__nav">
      <ul>
        <li class="AdminWrapper__nav-item">
          <router-link to="/admin/check">신청자 확인</router-link>
        </li>
        <li class="AdminWrapper__nav-item">
          <router-link to="/admin/notice">공지사항 관리</router-link>
        </li>
        <li class="AdminWrapper__nav-item">
          <router-link to="/admin/qna">QnA 관리</router-link>
        </li>
        <li class="AdminWrapper__nav-item">
          <router-link to="/admin/upload">결과 업로드</router-link>
        </li>
      </ul>
    </div>
    <div class="AdminWrapper__view">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  .AdminWrapper {
    display: grid;
    grid-template-columns: 1fr 7fr;
    &__nav {
      padding: 2rem;
    }

    &__nav-item {
      margin-bottom: 1rem;
      a {
        color: #3d5170;
        font-size: 1.5rem;
        text-decoration: none;
      }
    }

    &__view {
      padding: 2rem;
    }
  }
</style>
