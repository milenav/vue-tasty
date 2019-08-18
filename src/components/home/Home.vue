<template>
  <mdb-container>
    <section class="text-center my-5">
      <h2 class="h1-responsive font-weight-bold my-5">Our best projects</h2>
      <p class="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>
      <mdb-row class="text-left">

        <mdb-col lg="3" md="12" class="mb-lg-0 mb-4" v-for="restaurant in restaurants" :key="restaurant._id">
          <mdb-view class="view overlay rounded z-depth-1-half mb-4">
            <img :src="restaurant.image" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>
          <mdb-card-body class="pb-0">
            <h6 class="font-weight-bold my-3"><mdb-icon icon="utensils" class="left"/> {{restaurant.title}}</h6>
            <p class="grey-text">{{restaurant.description.slice(0,17)}} ...</p>
            <router-link :to="{name: 'detailsRestaurant', params: {id: restaurant._id}}">
            <mdb-btn class="mb-5" color="indigo" size="sm"><mdb-icon icon="utensils" class="left"/> View</mdb-btn>
          </router-link>
          </mdb-card-body>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>

  
</template>

<script>
import { restaurantService } from '@/services/restaurantService'
import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask, mdbCard, mdbCardBody, mdbBtn, mdbIcon } from 'mdbvue';

export default {
  data() {
    return {
      restaurants: []
    }
  },
  mixins: [restaurantService],
  created() {
    this.getAllRestaurants()
  },
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    mdbMask,
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbIcon
  }
}
</script>

<style scoped>
  .active-pink-2 input[type=text]:focus:not([readonly]) {
    border: 1px solid #f48fb1;
    box-shadow: 0 1px 0 0 #f48fb1;
  }
  .active-pink input[type=text] {
      border: 1px solid #f48fb1;
      box-shadow: 0 1px 0 0 #f48fb1;
  }
</style>