<template>
    <mdb-navbar color="indigo" class="mt-2" expand="xl" dark animated animation="2">
      <!-- Navbar brand -->
      <mdb-navbar-brand class="text-white">Navbar</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>Pricing</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
</template>    

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbContainer, mdbRow, mdbInput, mdbNavbarBrand, mdbIcon } from 'mdbvue';

export default {
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbContainer,
      mdbRow,
      mdbInput,
      mdbNavbarBrand,
      mdbIcon
    }   
}
</script>

<style scoped>

</style>