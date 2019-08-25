<template>
 <mdb-container>
    <section class="my-5">
      <mdb-row class="d-flex justify-content-center">
        <mdb-col class="col-md-6">
          <form @submit.prevent="onEditClick">
            <mdb-input  type="text"  />

            <mdb-input  type="text"  />

            <mdb-input  type="textarea"  :rows="1"/>

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
    mixins: [restaurantService],
        methods: {
        onEditClick() {
            this.editRestaurant(this.$route.params.id)
             .then(res => console.log(image.id));
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