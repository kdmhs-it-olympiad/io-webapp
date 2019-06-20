<script>
import { Component, Vue } from 'vue-property-decorator';
import FormTextarea from '@/components/FormTextarea.vue';
import FormRow from '@/components/FormRow.vue';
import IoButton from '@/components/IoButton.vue';

@Component({
  components: {
    FormTextarea,
    FormRow,
    IoButton,
  },
})
class QnA extends Vue {
  answers = [];

  formData = {
    content: '',
  };

  formDataValidate = {
    content: false,
  };

  submit() {
    alert('준비중입니다.');
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
            <form-textarea
              v-model="formData.content"
              :validate="formDataValidate.content"
              label="등록한 질문은 1~2일 안에 답변과 함께 게시됩니다."
              error="내용은 필수로 입력해야 합니다"
              placeholder="질문할 내용을 상세히 적어주세요"
            ></form-textarea>
          </form-row>
        </form>
        <io-button
          @click="submit"
          style="float: right; margin-top: 24px;" black
        >
          질문 등록
        </io-button>
      </div>
      <div class="QnA__section">
        <h2 class="QnA__subheader">답변</h2>
        <div class="QnA__answers">
          <div v-for="(answer, i) in answers" :key="`answer-${i}`" class="QnA__answer">
            <div class="QnA__answer-q">

            </div>
            <div class="QnA__answer-a">

            </div>
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
    }

    &__section {
      width: 50%;
      padding: 0 40px;
    }

    &__subheader {
      font-size: 36px;
      font-weight: lighter;
      margin-bottom: 24px;
    }
  }


</style>
