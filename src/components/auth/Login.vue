<template>
 <mdb-container>
    <section class="my-5">
      <mdb-row class="d-flex justify-content-center">
        <mdb-col class="col-md-6">
          <form @submit.prevent="onLoginClick">
            <mdb-input v-model="username" type="text" label="Username" />
            <p class="small text-danger">Your username is not valid!</p>

            <mdb-input v-model="password" type="password" label="Password" />
            <p class="small text-danger">Your password is not valid!</p>

            <mdb-btn color="pink" type="submit">Login</mdb-btn>
          </form>
        </mdb-col>
      </mdb-row>
    </section>
 </mdb-container>
</template>    

<script>
import { authenticate } from '@/services/authService'
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from "mdbvue";

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  mixins: [authenticate],
  methods: {
    onLoginClick() {
      this.loginUser(this.username, this.password)
    }
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbIcon,
    mdbInput,
    mdbTextarea,
    mdbCard,
    mdbCardBody
  }
};
</script>

<style scoped>
</style>