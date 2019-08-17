<template>
 <mdb-container>
    <section class="my-5">
      <mdb-row class="d-flex justify-content-center">
        <mdb-col class="col-md-6">
          <form @submit.prevent="onLoginClick">
            <mdb-input v-model="$v.username.$model" type="text" label="Username" />
            <p class="small text-danger" v-if="$v.username.$error">Your username is not valid!</p>

            <mdb-input v-model="$v.password.$model" type="password" label="Password" />
            <p class="small text-danger" v-if="$v.password.$error">Your password is not valid!</p>

            <mdb-btn color="pink" type="submit">Login</mdb-btn>
          </form>
        </mdb-col>
      </mdb-row>
    </section>
 </mdb-container>
</template>    

<script>
import { authenticate } from '@/services/authService'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from "mdbvue";

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  mixins: [authenticate],
  validations: {
    username: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(20)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20) 
    }
  },
  methods: {
    onLoginClick() {
      this.login(this.username, this.password)
      .then(res => this.$router.push('/'));
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