<template>
<!-- Footer -->
<footer class="page-footer font-small indigo">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© 2018 Copyright: Milena Valcheva
  </div>
  <!-- Copyright -->

</footer>
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

<style>
footer.page-footer {
 position: fixed;
 bottom: 0;
 width: 100%;
z-index:9999999;
}
</style>