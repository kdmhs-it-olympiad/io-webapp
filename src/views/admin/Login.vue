<script>
import { Component, Vue } from 'vue-property-decorator';
import FormText from '@/components/FormText.vue';
import FormRow from '@/components/FormRow.vue';
import IoButton from '@/components/IoButton.vue';

@Component({
  components: { FormText, FormRow, IoButton },
})
class Login extends Vue {
  username = '';

  password = '';

  loading = false;

  created() {
    if (this.$store.getters.isAdmin) this.$router.push('/admin/check');
  }

  async login() {
    this.loading = true;
    try {
      await this.$store.dispatch('login', { username: this.username, password: this.password });
      this.$router.push('/admin/check');
    } catch (err) {
      if (!err.response) {
        alert('네트워크에 문제가 있습니다.');
        return;
      }
      switch (err.response.status) {
        case 404:
          alert('아이디 혹은 비밀번호가 틀렸습니다.');
          break;
        default:
          alert('서버에 문제가 생겼습니다.');
          break;
      }
    } finally {
      this.loading = false;
    }
  }
}

export default Login;
</script>

<template>
  <div class="Login">
    <h1 class="Login__title">
      로그인
    </h1>
    <template v-if="!$store.getters.isAdmin">
      <form-row>
        <form-text
          v-model="username"
          label="사용자 이름"/>
        <form-text
          v-model="password"
          password
          label="비밀번호"/>
      </form-row>
      <io-button
        :disabled="loading"
        @click="login"
      >
        로그인
      </io-button>
    </template>
  </div>
</template>

<style lang="scss">
  .Login {
    &__title {
      margin-bottom: 2rem;
      font-size: 4rem;
    }
  }
</style>
