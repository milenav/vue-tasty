<template>
  <mdb-navbar expand="large" dark color="indigo" class="mt-2" animated animation="2">
    <router-link :to="{ name : 'Home'}">
<img src="https://i1.wp.com/www.equallyours.org.uk/wp-content/uploads/2012/04/edf-logo.png?fit=50%2C50&ssl=1" class="img-responsive" alt="Responsive image">
    Tasty
    </router-link>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <router-link :to="{ name : 'home'}" active><i class="fas fa-home"></i> Home</router-link>
        <template v-if="isAuth">
          <router-link :to="{ name : 'createRestaurant'}"><i class="fas fa-plus-circle"></i> Create</router-link>
          <router-link :to="{ name : ''}"><i class="fas fa-smile"></i> Profile</router-link>
          <router-link @click="onLogout" to="{ name : ''}"><i class="fas fa-sign-out-alt"></i> Logout</router-link>
        </template>
        <template v-else>
          <router-link :to="{ name : 'register'}"><i class="fas fa-user"></i> Register</router-link>
          <router-link :to="{ name : 'login'}"><i class="fas fa-sign-in-alt"></i> Login</router-link>
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