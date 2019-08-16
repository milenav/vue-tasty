<template>
  <mdb-container class="d-flex justify-content-center">
    <section class="my-5">
      <mdb-row>
        <mdb-col lg="12" class="col-md-6">
          <form>
            <mdb-input small="Your password must be 8-20 characters long" label="Username" />
            <mdb-input
              small="Your password must be 8-20 characters long, contain letters and numbers"
              label="Password"
            />
            <mdb-btn color="pink" type="submit">Register</mdb-btn>
          </form>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>    

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from "mdbvue";

export default {
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