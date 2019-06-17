<script>
import { Component, Vue, Prop } from 'vue-property-decorator';
import ContestAPI from '@/api/contest';

@Component({
  components: {
    Modal: () => import('@/components/Modal.vue'),
    ModalHeader: () => import('@/components/ModalHeader.vue'),
    IoButton: () => import('@/components/IoButton.vue'),

    FormRow: () => import('@/components/FormRow.vue'),
    FormRadio: () => import('@/components/FormRadio.vue'),
    FormSelect: () => import('@/components/FormSelect.vue'),
    FormSelectItem: () => import('@/components/FormSelectItem.vue'),
    FormRadioItem: () => import('@/components/FormRadioItem.vue'),
    FormAddress: () => import('@/components/FormAddress.vue'),
    FormDate: () => import('@/components/FormDate.vue'),
    FormHeader: () => import('@/components/FormHeader.vue'),
    FormFile: () => import('@/components/FormFile.vue'),
    FormText: () => import('@/components/FormText.vue'),
  },
})
class ApplyModal extends Vue {
  @Prop({ type: Boolean }) visible;

  formData = {
    name: '',
    sex: 'male',
    birthday: '',
    parentPhoneNumber: '',
    address: {
      postcode: '',
      address: '',
    },
    addressDetail: '',
    phoneNumber: '',
    school: {
      name: '',
      grade: '',
      class: '',
    },
    sector: '',
    lunchCount: '',
    image: '',
    password: '',
    passwordRe: '',
  }

  formDataValidate = {
    name: false,
    sex: false,
    birthday: false,
    parentPhoneNumber: false,
    phoneNumber: false,
    address: false,
    addressDetail: false,
    school: {
      name: false,
      grade: false,
      class: false,
    },
    sector: false,
    lunchCount: false,
    image: false,
    password: false,
    passwordRe: false,
  }

  loading = false;

  formDataValidator = {
    name: () => this.formData.name === '',

    sex: () => false,

    birthday: () => !this.formData.birthday,

    parentPhoneNumber: () => this.formData.parentPhoneNumber === '',

    phoneNumber: () => this.formData.phoneNumber === '',

    address: () => this.formData.address.postcode === ''
             || this.formData.address.address === '',

    addressDetail: () => this.formData.addressDetail === '',

    school: () => ({
      name: this.formData.school.name === '',
      grade: false,
      class: false,
    }),

    sector: () => this.formData.sector === '',

    lunchCount: () => this.formData.lunchCount === '',

    image: () => !this.formData.image,

    password: () => this.formData.password === '',

    passwordRe: () => this.formData.password !== this.formData.passwordRe,
  }

  grades = new Array(3)
    .fill(0)
    .map((a, i) => i + 1);

  classes = new Array(20)
    .fill(0)
    .map((a, i) => i + 1);

  get syncedVisible() {
    return this.visible;
  }

  set syncedVisible(v) {
    this.$emit('update:visible', v);
  }

  validate() {
    const validate = {};
    Object
      .keys(this.formData)
      .map(k => ({
        field: k,
        result: this.formDataValidator[k](),
      }))
      .forEach(r => validate[r.field] = r.result);

    this.formDataValidate = validate;
  }

  async request() {
    this.loading = true;
    this.validate();

    const a = Object
      .values(this.formDataValidate)
      .flatMap(i => (typeof i === 'object' ? Object.values(i) : i))
      .some(Boolean);

    if (!a) {
      try {
        const result = await ContestAPI.apply(this.formData);
        if (result.status === 200) {
          alert('신청을 성공했습니다.');
          location.reload();
        } else {
          alert('신청중에 문제가 발생했습니다.');
          this.loading = false;
        }

        this.loading = false;
      } catch (e) {
        alert('신청중에 문제가 발생했습니다.');
        this.loading = false;
      }
    } else {
      this.loading = false;
    }
  }
}

export default ApplyModal;
</script>

<template>
  <modal :visible.sync="syncedVisible" :loading="loading">
    <modal-header @close="syncedVisible = false">참가 신청</modal-header>

    <div class="ApplyModal__body">
      <form @submit.prevent="">
        <form-header>
          <i class="bx bx-user" slot="icon"></i>
          <template>개인정보</template>
        </form-header>

        <form-row>
          <form-text
            v-model="formData.name"
            :validate="formDataValidate.name"
            label="이름"
            error="이름은 필수로 입력해야합니다"
            placeholder="성을 포함한 전체 이름을 입력하세요">
          </form-text>

          <form-radio label="성별">
            <form-radio-item name="sex" item="male" v-model="formData.sex">남성</form-radio-item>
            <form-radio-item name="sex" item="female" v-model="formData.sex">여성</form-radio-item>
          </form-radio>
        </form-row>

        <form-row>
          <form-date
            v-model="formData.birthday"
            :validate="formDataValidate.birthday"
            label="생년월일"
            error="생년월일은 필수로 입력해야합니다"
            placeholder="생년월일을 입력하세요">
          </form-date>

          <div class="blank"></div>
        </form-row>

        <form-row>
          <form-text
            v-model="formData.parentPhoneNumber"
            label="법적 대리인 전화번호"
            :validate="formDataValidate.parentPhoneNumber"
            addiction="신청 확인용"
            error="법정 대리인 전화번호는 필수로 입력해야합니다"
            placeholder="- 없이 숫자만 입력하세요">
          </form-text>

          <form-text
            v-model="formData.phoneNumber"
            :validate="formDataValidate.phoneNumber"
            error="신청자 전화번호는 필수로 입력해야합니다"
            label="신청자 전화번호"
            placeholder="- 없이 숫자만 입력하세요">
          </form-text>
        </form-row>

        <form-row>
          <form-text
            v-model="formData.school.name"
            :validate="formDataValidate.school.name"
            label="학교명"
            error="학교명은 필수로 입력해야합니다"
            placeholder="재학중인 학교명을 입력하세요">
          </form-text>

          <div>
            <form-select
              style="display: inline-block; width: 50%; padding-right: 5px;"
              :validate="formDataValidate.school.grade"
              placeholder="학년을 선택"
              label="학년"
              v-model="formData.school.grade">
              <form-select-item
                v-for="grade in grades"
                :key="`grade-${grade}`"
                :value="grade">
                {{ grade }}학년
              </form-select-item>
            </form-select>

            <form-select
              style="display: inline-block; width: 50%; padding-left: 5px;"
              :validate="formDataValidate.school.class"
              placeholder="반을 선택"
              label="반"
              v-model="formData.school.class">
              <form-select-item
                v-for="clazz in classes"
                :key="`class-${clazz}`"
                :value="clazz">
                {{ clazz }}반
              </form-select-item>

              <form-select-item
                value="etc">
                기타
              </form-select-item>
            </form-select>
          </div>
        </form-row>

        <form-row style="margin-bottom: 48px;">
          <form-address
            v-model="formData.address"
            :validate="formDataValidate.address"
            error="주소는 필수로 입력해야합니다"
            label="주소">
          </form-address>

          <form-text
            v-model="formData.addressDetail"
            :validate="formDataValidate.addressDetail"
            label="상세 주소"
            error="상세 주소는 필수로 입력해야합니다"
            placeholder="아파트 동, 호 등 상세한 주소를 입력하세요">
          </form-text>
        </form-row>

        <form-header>
          <i class="bx bx-trophy" slot="icon"></i>
          <template>대회정보</template>
        </form-header>

        <form-row>
          <form-select
            label="신청 부문"
            :validate="formDataValidate.sector"
            placeholder="신청할 부문을 선택하세요"
            error="신청 부문은 필수로 선택해야합니다"
            v-model="formData.sector">
            <form-select-item value="programming">프로그래밍</form-select-item>
            <form-select-item value="business">창업 아이템</form-select-item>
            <form-select-item value="design">컴퓨터 그래픽</form-select-item>
          </form-select>

          <form-file
            label="신청자 얼굴 사진"
            :validate="formDataValidate.image"
            placeholder="이미지를 올리세요"
            error="얼굴 사진은 필수로 올려야합니다"
            button="이미지 업로드"
            files=".png, .jpg, .jpeg"
            description="* 일체의 수정을 거치지 않은 명함판 사진(여권용, 5cm X 7cm)만 등록 가능합니다"
            v-model="formData.image"
            name="profile">
          </form-file>
        </form-row>

        <form-row>
          <form-text
            label="신청 확인용 비밀번호"
            placeholder="신청 확인 시 필요합니다"
            error="비밀번호는 필수로 등록해야합니다"
            :validate="formDataValidate.password"
            v-model="formData.password"
            password>
          </form-text>

          <form-text
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            error="비밀번호가 틀립니다"
            :validate="formDataValidate.passwordRe"
            v-model="formData.passwordRe"
            password>
          </form-text>
        </form-row>

        <form-row>
          <form-select
            label="점심식사 인원"
            addiction="신청자 본인 포함"
            placeholder="점심식사 인원을 선택하세요"
            error="점심식사 인원은 필수로 선택해야합니다"
            :validate="formDataValidate.lunchCount"
            v-model="formData.lunchCount">
            <form-select-item value="0">점심식사를 하지 않음</form-select-item>
            <form-select-item
              v-for="count in [1,2,3,4,5]"
              :key="`lunch-${count}`"
              :value="count">
              {{ count }}명
            </form-select-item>
            <form-select-item value="6">6명 이상</form-select-item>
          </form-select>

          <div class="blank"></div>
        </form-row>
      </form>

      <div style="padding-top: 16px">
          <a href="/policy" class="ApplyModal__policy" target="_blank">개인정보 처리방침</a>
          <p class="ApplyModal__policy--agree">전국 중학생 IT 올림피아드 참가 신청은 위 개인정보 처리방침에 동의했음을 의미합니다.</p>
      </div>
    </div>

    <div class="ApplyModal__footer">
        <io-button @click="request" black>
          참가신청 하기 <i class='bx bx-fw bx-right-arrow-alt'></i>
        </io-button>
    </div>
  </modal>
</template>

<style lang="scss">
  @import '../styles/color';

  .ApplyModal {
    &__body {
      padding: 24px 80px;

      @media (max-width: 780px) {
        padding: 20px;
      }
    }

    &__policy {
      font-size: 14px;
      color: black;

      &--agree {
        margin-top: 8px;
        font-size: 12px;
        color: #7f7788;
      }
    }

    &__footer {
      padding: 24px 80px 48px 80px;

      display: flex;
      flex-flow: row nowrap;
      justify-content: center;

      @media (max-width: 780px) {
        padding: 20px;

        * {
          flex: 1;
        }
      }
    }
  }
</style>
