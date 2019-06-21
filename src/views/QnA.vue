<script>
import { Component, Vue } from 'vue-property-decorator';
import NoticeAPI from '@/api/notice';
import FormTextarea from '@/components/FormTextarea.vue';
import FormText from '@/components/FormText.vue';
import FormRow from '@/components/FormRow.vue';
import IoButton from '@/components/IoButton.vue';

@Component({
  components: {
    FormTextarea,
    FormText,
    FormRow,
    IoButton,
  },
})
class QnA extends Vue {
  answers = [];

  formData = {
    content: '',
    email: '',
    name: '',
  };

  offset = 0;

  end = false;

  loading = {
    post: false,
    fetch: false,
  };

  dirty = false;

  async created() {
    await this.showMore();
  }

  get formDataValidate() {
    if (!this.dirty) {
      return Object.keys(this.formData).reduce((pv, cv) => {
        pv[cv] = false;
        return pv;
      }, {});
    }

    return {
      content: this.formData.content === '',
      email: this.formData.email === '',
      name: this.formData.name === '',
    };
  }

  reset() {
    this.formData = {
      content: '',
      email: '',
      name: '',
    };

    this.dirty = false;
  }

  async submit() {
    this.dirty = true;

    if (Object.values(this.formDataValidate).indexOf(true) !== -1) return;

    try {
      this.loading.post = true;
      await NoticeAPI.post(this.formData);

      this.reset();
    } catch (err) {
      alert('문제가 생겼습니다.');
    } finally {
      this.loading.post = false;
    }
  }

  async showMore() {
    if (this.end) {
      alert('더 이상 질문이 없습니다.');
      return;
    }

    try {
      this.loading.fetch = true;
      const result = await NoticeAPI.fetch(this.offset, 15);
      this.offset += 15;
      if (result.data.end) this.end = true;
      this.answers = this.answers.concat(result.data.qa);
    } catch (err) {
      alert('문제가 생겼습니다.');
    } finally {
      this.loading.fetch = false;
    }
  }
}

export default QnA;
</script>

<template>
  <div class="QnA">
    <div class="QnA__content">
      <div class="QnA__section">
        <h2 class="QnA__subheader">질문하기</h2>
        <form @submit.prevent>
          <form-row>
            <p>등록한 질문은 1~2일 안에 답변과 함께 게시됩니다.</p>
          </form-row>
          <form-row>
            <form-text
              v-model="formData.name"
              :validate="formDataValidate.name"
              label="이름"
              error="이름은 필수로 입력해야 합니다"
              placeholder="이름을 입력해주세요"
            ></form-text>
            <form-text
              v-model="formData.email"
              :validate="formDataValidate.email"
              label="이메일"
              error="이메일은 필수로 입력해야 합니다."
              placeholder="이메일을 입력해주세요"
            ></form-text>
          </form-row>
          <form-row>
            <form-textarea
              v-model="formData.content"
              :validate="formDataValidate.content"
              label="질문 내용"
              error="내용은 필수로 입력해야 합니다"
              placeholder="질문할 내용을 상세히 적어주세요"
            ></form-textarea>
          </form-row>
        </form>
        <io-button
          @click="submit"
          class="QnA__submit" black
          :disabled="loading.post"
        >
          {{ loading.post ? '등록 중...' : '질문 등록' }}
        </io-button>
      </div>
      <div class="QnA__section">
        <h2 class="QnA__subheader">답변</h2>
        <div class="QnA__answers">
          <div v-for="(answer, i) in answers" :key="`answer-${i}`" class="QnA__answer-wrapper">
            <div class="QnA__answer QnA__answer--q">
              {{ 'Q. ' + answer.question }}
            </div>
            <div class="QnA__answer">
              {{ 'A. ' + answer.answer }}
            </div>
          </div>
          <div class="QnA__show-more">
            <io-button
            v-if="!end"
            :disabled="loading.fetch"
            @click="showMore" black ghost>
              {{ loading.fetch ? '불러오는 중' : '더보기'}}
            </io-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .QnA {
    &__content {
      display: flex;
      padding: 50px 120px;
      margin: 0 -40px;
      @media (max-width: 1080px) {
        flex-wrap: wrap;
      }
    }

    &__section {
      width: 50%;
      padding: 0 40px;

      @media (max-width: 1080px) {
        width: 100%;
      }
    }

    &__subheader {
      font-size: 36px;
      font-weight: lighter;
      margin-bottom: 24px;
    }

    &__submit {
      float: right;
      margin-top: 24px;
      @media (max-width: 1080px) {
        margin-top: 0;
      }
    }

    &__answer-wrapper {
      margin-bottom: 40px;
    }

    &__answer {
      font-size: 16px;
      line-height: 1.5;
    }

    &__answer--q {
      font-weight: 800;
    }

    &__show-more {
      display: flex;
      justify-content: center;
    }
  }


</style>
