<template>
  <mdb-navbar expand="large" dark color="indigo" class="mt-2" animated animation="2">
    <mdb-navbar-brand href="/">
<img src="https://i1.wp.com/www.equallyours.org.uk/wp-content/uploads/2012/04/edf-logo.png?fit=50%2C50&ssl=1" class="img-responsive" alt="Responsive image">
    Tasty
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item href="/" active><i class="fas fa-home"></i> Home</mdb-nav-item>
        <template v-if="isAuth">
          <mdb-nav-item href="/restaurant/create"><i class="fas fa-plus-circle"></i> Create</mdb-nav-item>
          <mdb-nav-item href="#"><i class="fas fa-smile"></i> Profile</mdb-nav-item>
          <mdb-nav-item @click="onLogout" href="/"><i class="fas fa-sign-out-alt"></i> Logout</mdb-nav-item>
        </template>
        <template v-else>
          <mdb-nav-item href="/register"><i class="fas fa-user"></i> Register</mdb-nav-item>
          <mdb-nav-item href="/login"><i class="fas fa-sign-in-alt"></i> Login</mdb-nav-item>
        </template>
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
  },
  methods: {
    onLogout() {
      this.logout(localStorage.clear())
      .then(res => this.$router.push('/'));
    }
  }
}
</script>

<style scoped>
</style>