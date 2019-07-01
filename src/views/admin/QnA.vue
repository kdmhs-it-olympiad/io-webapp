<script>
import { Component, Vue } from 'vue-property-decorator';
import Fuse from 'fuse.js';
import AdminAPI from '@/api/admin';
import FormText from '@/components/FormText.vue';
import FormTextarea from '@/components/FormTextarea.vue';
import IoButton from '@/components/IoButton.vue';
import loader from '@/assets/img/loader.gif';

@Component({
  components: { FormText, FormTextarea, IoButton },
})
class QnA extends Vue {
  list = [];

  noAnswerCheck = false;

  loading = false;

  uploadingAnswer = false;

  fuse = null;

  noAnswerFuse = null;

  openedAnswer = null;

  search = '';

  answer = '';

  async created() {
    await this.refresh();
  }

  get loader() {
    return loader;
  }

  get noAnswerList() {
    return this.list.filter(v => !v.answer);
  }

  get searchedList() {
    const fuse = this.noAnswerCheck ? this.noAnswerFuse : this.fuse;
    const list = this.noAnswerCheck ? this.noAnswerList : this.list;
    return this.search ? fuse.search(this.search) : list;
  }

  async refresh() {
    this.loading = true;

    try {
      const result = await AdminAPI.fetchQnA();
      this.list = result.data.qa;
      const keys = ['name', 'email', 'date', 'question', 'answerDate', 'answer'];
      const fuseOptions = { keys, threshold: 0.2 };
      this.fuse = new Fuse(this.list, fuseOptions);
      this.noAnswerFuse = new Fuse(this.noAnswerList, fuseOptions);
    } catch (err) {
      if (!err.response) {
        alert('네트워크에 문제가 있습니다.');
        return;
      }
      switch (err.response.status) {
        case 404:
          this.list = [];
          break;
        default:
          alert('토큰이 만료되었습니다.');
          this.$store.commit('updateToken', '');
          this.$router.push('/admin');
      }
    } finally {
      this.loading = false;
    }
  }

  setAnswerOpen(i) {
    if ((this.openedAnswer && this.answer)) {
      alert('작성하던 답변을 게시하거나 취소해주세요.');
      return;
    }
    if (this.uploadingAnswer) {
      alert('답변이 게시 될 때까지 기다려주세요.');
      return;
    }
    this.openedAnswer = i;
    if (this.list[i].answer) this.answer = this.list[i].answer;
  }

  setAnswerClose() {
    if (this.uploadingAnswer) return;
    this.answer = '';
    this.openedAnswer = null;
  }

  async uploadAnswer() {
    if (this.uploadingAnswer) return;
    this.uploadingAnswer = true;

    try {
      await AdminAPI.uploadQnA({ id: this.list[this.openedAnswer].id, answer: this.answer });
      this.uploadingAnswer = false;
      this.setAnswerClose();
      await this.refresh();
    } catch (err) {
      if (!err.response) {
        alert('네트워크에 문제가 있습니다.');
        return;
      }
      switch (err.response.status) {
        default:
          alert('토큰이 만료되었습니다. 답변을 다른 곳에 저장한 뒤 페이지를 새로고침해주세요.');
      }
    } finally {
      this.uploadingAnswer = false;
    }
  }
}

export default QnA;
</script>

<template>
  <div class="QnA">
    <div class="QnA__title">
      질문과 답변 관리
    </div>
    <div class="io-table-toolbox">
      <form-text
          v-model="search"
          class="QnA__form-text"
          placeholder="뭐든지 검색하세요"
          label="검색"/>
      <input class="QnA__checkbox" type="checkbox" v-model="noAnswerCheck" id="cb">
      <label class="QnA__checkbox-label" for="cb"><span></span>답변 안 한 질문만</label>
    </div>
    <table class="io-table">
      <thead class="io-thead">
        <tr class="io-tr">
          <th class="io-th io-th--x-sm" scope="col">#</th>
          <th class="io-th io-th--m" scope="col">이름</th>
          <th class="io-th io-th--x-l" scope="col">이메일</th>
          <th class="io-th io-th--l" scope="col">등록시일</th>
          <th class="io-th" scope="col">질문 내용</th>
          <th class="io-th" scope="col">답변 내용</th>
        </tr>
      </thead>
      <tbody class="io-tbody">
        <tr v-for="(v, i) in searchedList" :key="i" class="io-tr">
          <td class="io-td">{{ v.id }}</td>
          <td class="io-td">{{ v.name }}</td>
          <td class="io-td">{{ v.email }}</td>
          <td class="io-td">{{ v.create_datetime }}</td>
          <td class="io-td">{{ v.question }} </td>
          <td
          class="io-td QnA__click"
            v-if="v.answer && openedAnswer !== i"
            @click="setAnswerOpen(i)"
          >
            {{ v.answer }}
          </td>
          <td
            class="io-td QnA__click"
            v-else-if="openedAnswer !== i"
            @click="setAnswerOpen(i)"
          >
            클릭해서 답변달기
          </td>
          <td class="io-td" v-if="openedAnswer === i">
            <form-textarea v-model="answer"></form-textarea>
            <div class="QnA__buttons">
              <io-button
                black ghost class="QnA__button"
                :disabled="uploadingAnswer"
                @click="setAnswerClose()">취소</io-button>
              <io-button
                class="QnA__button"
                @click="uploadAnswer">{{ uploadingAnswer ? '게시 중..' : '답변 게시' }}</io-button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="text-align: center;" v-if="loading">
      <img :src="loader">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .QnA {
    &__title {
      font-size: 1.75rem;
      color: #3d5170;
      margin-bottom: 2rem;
    }

    &__form-text {
      width: 60%;
      margin-right: 5px;
      display: inline-block;
      margin-right: 2rem;
    }
    &__checkbox {
      display: none
    }

    &__checkbox-label {
      margin-right: 2rem;
    }

    &__checkbox + &__checkbox-label span {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin: -2px 10px 0 0;
      vertical-align: middle;
      border: 2px solid #bcbcbc;
      border-radius: 5px;
      cursor: pointer;
    }

    &__checkbox:checked + &__checkbox-label span {
      background: url("https://i.ya-webdesign.com/images/green-checkbox-png-4.png") center center no-repeat;
      background-size: cover;
    }

    &__buttons {
      display: flex;
      justify-content: flex-end;
    }

    &__button {
      font-size: 1rem;
      font-weight: normal;
      padding: 0.25rem 0.5rem;
      margin-left: 0.5rem;
    }

    &__click {
      cursor: pointer;
    }
  }

  .io-td:nth-child(5), .io-td:nth-child(7) {
    line-height: 1.25;
    padding: 1rem 1.5rem;
  }
</style>
