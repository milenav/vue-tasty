<template>
  <mdb-navbar expand="large" dark color="indigo" class="mt-2" animated animation="2">
    <mdb-navbar-brand href="/">
      Tasty
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="/" active><i class="fas fa-home"></i> Home</mdb-nav-item>
        <mdb-nav-item href="#"><i class="fas fa-plus-circle"></i> Create</mdb-nav-item>
        <mdb-nav-item href="#"><i class="fas fa-smile"></i> Profile</mdb-nav-item>
        <mdb-nav-item href="/register"><i class="fas fa-user"></i> Register</mdb-nav-item>
        <mdb-nav-item href="/login"><i class="fas fa-sign-in-alt"></i> Login</mdb-nav-item>
        <mdb-nav-item class="disabled" href="#"><i class="fas fa-sign-out-alt"></i> Logout</mdb-nav-item>
        <!-- <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Dropdown</mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item>Action</mdb-dropdown-item>
            <mdb-dropdown-item>Another action</mdb-dropdown-item>
            <mdb-dropdown-item>Something else here</mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown> -->
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>    

<script>
import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon } from 'mdbvue';

export default {
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbContainer,
      mdbDropdown,
      mdbDropdownToggle,
      mdbDropdownMenu,
      mdbDropdownItem,
      mdbIcon
    }   
}
</script>

<style scoped>

</style>