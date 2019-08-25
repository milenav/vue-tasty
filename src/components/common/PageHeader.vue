<template>
  <mdb-navbar expand="large" dark color="indigo" class="mt-2" animated animation="2">
    
<img src="https://i1.wp.com/www.equallyours.org.uk/wp-content/uploads/2012/04/edf-logo.png?fit=50%2C50&ssl=1" class="img-responsive" alt="Responsive image">

    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <mdb-nav-item><router-link class="text-white" tag="a" to="/" active><i class="fas fa-home"></i> Home</router-link></mdb-nav-item>
        <template v-if="isAuth">
          <mdb-nav-item><router-link class="text-white" tag="a" to="/restaurant/create"><i class="fas fa-plus-circle"></i> Create</router-link></mdb-nav-item>
          <!-- <router-link :to="{ name : ''}"><i class="fas fa-smile"></i> Profile</router-link> -->
          <router-link to="#"> 
          <mdb-nav-item class="text-white" @click.prevent="onLogout"><i class="fas fa-sign-out-alt"></i> Logout</mdb-nav-item>
          </router-link>
        </template>
        <template v-else>
          <mdb-nav-item><router-link class="text-white" tag="a" to="/register"><i class="fas fa-user"></i> Register</router-link></mdb-nav-item>
          <mdb-nav-item><router-link class="text-white" tag="a" to="/login"><i class="fas fa-sign-in-alt"></i> Login</router-link></mdb-nav-item>
        </template>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>    

<script>
import { authenticate } from '@/services/authService'
import { mdbDropdown, mdbDropdownToggle, mdbDropdownMenu, mdbDropdownItem, mdbContainer, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem, mdbIcon } from 'mdbvue';

export default {
  mixins: [authenticate],
  methods: {
  onLogout() {
      this.logout().then(user => {
      localStorage.clear() 
      this.$root.$emit('logged-out', user.authtoken)
      })
    },
  },
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