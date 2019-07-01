<script>
import { Component, Vue } from 'vue-property-decorator';
import Fuse from 'fuse.js';
import AdminAPI from '@/api/admin';
import FormText from '@/components/FormText.vue';
import IoButton from '@/components/IoButton.vue';

@Component({
  components: { FormText, IoButton },
})
class Check extends Vue {
  list = [];

  search = '';

  fuse = null;

  loading = false;

  photoClicked = {};

  showAllPhotos = false;

  async created() {
    this.loading = true;

    try {
      const result = await AdminAPI.fetchApplicants();
      this.list = result.data.contestant;
      const keys = ['name', 'birth', 'agent_phone', 'phone', 'school', 'address', 'detail_address', 'sector'];
      const fuseOptions = { keys, threshold: 0.2 };
      this.fuse = new Fuse(this.list, fuseOptions);
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

  get searchedList() {
    return this.search ? this.fuse.search(this.search) : this.list;
  }

  get computedLength() {
    return this.searchedList.length;
  }

  onTableRowClick(i) {
    console.dir(this.list[i]);
  }

  showPhoto(i) {
    this.$set(this.photoClicked, i, true);
  }

  hidePhoto(i) {
    this.$set(this.photoClicked, i, false);
  }
}

export default Check;
</script>

<template>
  <div class="Check">
    <h1 class="Check__title">신청자 확인</h1>
    <div class="Check__toolbox io-table-toolbox">
      <div class="Check__form">
        <form-text
          v-model="search"
          class="Check__form-text"
          placeholder="뭐든지 검색하세요"
          label="검색"/>

        <input class="Check__checkbox" type="checkbox" v-model="showAllPhotos" id="cb2">
        <label class="Check__checkbox-label" for="cb2"><span></span>신청자 사진 모두 보기</label>

        <span style="font-weight: bold; font-size: 18px;">검색결과 : {{ computedLength }}개</span>
      </div>
    </div>
    <table class="io-table">
      <thead class="io-thead">
        <tr class="io-tr Check__tr">
          <th class="io-th io-th--x-sm" scope="col">#</th>
          <th class="io-th io-th--m" scope="col">이름</th>
          <th class="io-th" scope="col">생년월일</th>
          <th class="io-th" scope="col">대리인 전화번호</th>
          <th class="io-th" scope="col">신청자 전화번호</th>
          <th class="io-th" scope="col">학교명</th>
          <th class="io-th io-th--sm" scope="col">학년</th>
          <th class="io-th io-th--sm" scope="col">반</th>
          <th class="io-th" scope="col">주소</th>
          <th class="io-th" scope="col">상세주소</th>
          <th class="io-th" scope="col">신청부문</th>
          <th class="io-th" scope="col">얼굴사진</th>
          <th class="io-th" scope="col">점심식사 인원</th>
        </tr>
      </thead>
      <tbody class="Check__tbody">
        <template>
          <tr
            @click="onTableRowClick(i)"
            v-for="(v, i) in searchedList" :key="i" class="io-tr Check__tr">
            <td class="io-td">{{ v.id }}</td>
            <td class="io-td">{{ v.name }}</td>
            <td class="io-td">{{ v.birth }}</td>
            <td class="io-td">{{ v.agent_phone }}</td>
            <td class="io-td">{{ v.phone }}</td>
            <td class="io-td">{{ v.school }}</td>
            <td class="io-td">{{ v.grade }}</td>
            <td class="io-td">{{ v.class }}</td>
            <td class="io-td">{{ v.address }}</td>
            <td class="io-td">{{ v.detail_address }}</td>
            <td class="io-td">{{ v.sector }}</td>
            <td class="io-td">
              <io-button
                class="Check__button"
                v-show="v.photo && !photoClicked[i] && !showAllPhotos"
                @click="showPhoto(i)">사진보기</io-button>
              <img v-show="(photoClicked[i] || showAllPhotos) && v.photo" @click="hidePhoto(i)" class="Check__table-photo" :src="`https://file.choich.space/photo/${v.photo}`">
              <span v-show="!v.photo">사진없음</span>
            </td>
            <td class="io-td">{{ v.lunch_number }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <p style="text-align: center; font-size: 3rem;" v-if="loading">로딩중...</p>
  </div>
</template>

<style lang="scss" scoped>
  .Check {
    &__title {
      font-size: 1.75rem;
      color: #3d5170;
      margin-bottom: 2rem;
    }

    &__tr {
      cursor: pointer;
    }

    &__table-photo {
      width: 100px;
    }

    &__toolbox { }

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

    &__button {
      font-size: 1rem;
      font-weight: normal;
      padding: 0.2rem 0.5rem;
    }
  }
</style>
