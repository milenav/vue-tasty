<template>
  <!-- Footer -->
  <mdb-footer color="indigo" class="font-small pt-0 fixed-bottom mt-5">
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2019 Copyright: Milena Valcheva 
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>   

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';

export default {
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }   
}
</script>

<style scoped>

</style>