<template>
 <mdb-container>
    <section class="my-5">
      <mdb-row class="d-flex justify-content-center">
        <mdb-col class="col-md-6">
          <form @submit.prevent="onRegisterClick">
            <mdb-input type="text" v-model="$v.username.$model" label="Username" />
            <p class="small text-danger" v-if="$v.username.$error">Your username must be 4-20 characters long!</p>

            <mdb-input type="email" v-model="$v.email.$model" label="Email" />
            <p class="small text-danger" v-if="$v.email.$error">Your email is not valid!</p>

            <mdb-input type="password" v-model="$v.password.$model" label="Password" />
            <p class="small text-danger" v-if="$v.password.$error">Your password must be 6-20 characters long!</p>

            <mdb-btn color="pink" type="submit" :disabled="$v.$error">Register</mdb-btn>
          </form>
        </mdb-col>
      </mdb-row>
    </section>
 </mdb-container>
</template>    

<script>
import config from '@/config/config'
import axios from 'axios'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from "mdbvue";

export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    validations: {
        username: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(20)
        },
        email: {
            required,
            email
        },
        password: {
            required,
            minLength: minLength(6),
            maxLength: maxLength(20)
        }
    },
    methods: {
        onRegisterClick() {
            const authString = btoa(`${config.appKey}:${config.appSecret}`);

            axios({
                method: 'post',
                url: `https://baas.kinvey.com/user/${config.appKey}`, 
                data: {
                    username: this.username,
                    password: this.password
                },
                headers: {
                    'Authorization': `Basic ${authString}`,
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res)
            })
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