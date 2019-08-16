<template>
  <mdb-container class="d-flex justify-content-center">
    <section class="my-5">
      <mdb-row>
        <mdb-col lg="12" class="col-md-6">
            <form>
          <mdb-input
            small="Your password must be 8-20 characters long"
            label="Username"
          />

          <mdb-input
            small="Your password must be 8-20 characters long."
            label="Email"
          />

          <mdb-input
            small="Your password must be 8-20 characters long, contain letters and numbers"
            label="Password"
          />

          <mdb-btn color="pink" type="submit">Register</mdb-btn>

          <!-- <div class="form-group">
    <label for="exampleHelpText">Username</label>
    <input type="text" id="exampleHelpText" class="form-control" placeholder="Default input">
    <small id="passwordHelpBlock" class="form-text text-muted">
      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
      special characters,
      or emoji.
    </small>
    <label for="exampleHelpText">Email</label>
    <input type="email" id="exampleHelpText" class="form-control" placeholder="Default input">
    <small id="passwordHelpBlock" class="form-text text-muted">
      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
      special characters,
      or emoji.
    </small>
    <label for="exampleHelpText">Password</label>
    <input type="password" id="exampleHelpText" class="form-control" placeholder="Default input">
    <small id="passwordHelpBlock" class="form-text text-muted">
      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
      special characters,
      or emoji.
          </small>-->
            </form>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>    

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbIcon,
  mdbInput,
  mdbTextarea,
  mdbCard,
  mdbCardBody
} from "mdbvue";

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