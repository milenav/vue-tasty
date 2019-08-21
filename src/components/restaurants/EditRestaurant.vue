<template>
 <mdb-container>
    <section class="my-5">
      <mdb-row class="d-flex justify-content-center">
        <mdb-col class="col-md-6">
          <form @submit.prevent="onEditClick">
            <mdb-input v-model="restaurant.image" type="text"  />
            <p class="small text-danger" >Your username is not valid!</p>

            <mdb-input v-model="restaurant.title" type="text"  />
            <p class="small text-danger" >Your password is not valid!</p>

            <mdb-input v-model="restaurant.description" type="textarea"  :rows="1"/>
            <p class="small text-danger" >Your password is not valid!</p>

            <mdb-btn color="pink" type="submit">Edit</mdb-btn>
          </form>
        </mdb-col>
      </mdb-row>
    </section>
 </mdb-container>
</template>    

<script>
import { restaurantService } from '@/services/restaurantService'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from "mdbvue";

export default {
    data() {
        return {
            restaurant: {}
        }
    },
    mixins: [restaurantService],
        methods: {
        onEditClick() {
            this.editRestaurant(this.$route.params.id, this.image, this.title, this.description)
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
}
</script>

<style scoped>

</style>