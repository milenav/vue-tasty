<template>
  <mdb-container>
    <section class="text-center my-5"  v-if="isAuth">
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
 <div v-else class="mt-5">
       <mdb-row class="page row">
       <mdb-col md="6" xs="12" class="half-page column animated fadeInLeft">
        <h1 class="heading display-4">Material Design for Bootstrap</h1>
        <h2 class="subheading font-weight-bold">World's most popular framework for building responsive, mobile-first websites and apps</h2>
        <mdb-btn rounded icon="caret-right" icon-right color="lily">get started</mdb-btn>
      </mdb-col> 
      <mdb-col class="column" md="6" xs="12">
        <mdb-view>
        <img class="image animated fadeInDown" src="https://www.pngarts.com/files/3/Food-PNG-Transparent-Image.png" >
        <mdb-mask flex-center class="hm-gradient" />
        </mdb-view>
      </mdb-col>
    </mdb-row>

  </div>
  </mdb-container>

</template>



<script>
import { restaurantService } from '@/services/restaurantService'
import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask, mdbCard, mdbCardBody, ViewWrapper, mdbBtn, mdbIcon, mdbParallax } from 'mdbvue';

export default {
  mixins: [restaurantService],
  created() {
    this.getAllRestaurants()
  },

  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbView,
    ViewWrapper,
    mdbParallax,
    mdbMask,
    mdbCard,
    mdbCardBody,
    mdbBtn,
    mdbIcon
  }
}
</script>

<style>
  .active-pink-2 input[type=text]:focus:not([readonly]) {
    border: 1px solid #f48fb1;
    box-shadow: 0 1px 0 0 #f48fb1;

  }
  .active-pink input[type=text] {
      border: 1px solid #f48fb1;
      box-shadow: 0 1px 0 0 #f48fb1;
  }
 
    .logo {
      height: 40px;
      width: auto;
      margin: 10px;
    }

    .menu {
      text-align: end;
      padding-right: 0.5em;
    }

    /* .hm-gradient {
      background: linear-gradient(40deg, rgba(0,51,199,.3), rgba(209,149,249,.3));
    } */

    .row {
      margin: 0;
      padding:0;
    }

    .column {
      margin: 0;
      padding: 0;
    }

    .half-page {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      padding: 0 6rem;
    }

    .heading {
      font-weight: 700;
      color: #5d4267;
    }

    .subheading {
      margin: 2.5rem 0;
      color: #bcb2c0;
      font-size: 1.5rem;
    }

    .btn-lily {
      background: linear-gradient(40deg, rgba(0,51,199,.7), rgba(209,149,249,.7));
    }

    .image {
      width: 100%;
    }

    .paragraph {
      padding: 3rem 1.5em;
    }

    @media screen and (max-width: 770px) {
      .half-page {
        padding:2rem;
      }

    }

    @media screen and (max-width: 400px) {
      .half-page {
        padding: 1rem;
      }
    }

    @media screen and (max-width: 320px) {
      .heading {
        font-size: 4em;
      }
    }

</style>