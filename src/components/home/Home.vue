<template>
  <mdb-container>
    <section class="text-center my-5">
      <h2 class="h1-responsive font-weight-bold my-5">Our best projects</h2>
      <p class="grey-text w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit est laborum.</p>
      <mdb-row class="text-center">

        <mdb-col lg="4" md="12" class="mb-lg-0 mb-4" v-for="restaurant in restaurants" :key="restaurant._id">
          <mdb-view class="overlay rounded z-depth-1">
            <img src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>
          <mdb-card-body class="pb-0">
            <h4 class="font-weight-bold my-3">{{responsive.title}}Title of the news</h4>
            <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
            <mdb-btn color="indigo" size="sm"><mdb-icon icon="clone" class="left"/> View project</mdb-btn>
          </mdb-card-body>
        </mdb-col>

        <!-- <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <mdb-view class="overlay rounded z-depth-1">
            <img src="https://mdbootstrap.com/img/Photos/Others/project4.jpg" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>
          <mdb-card-body class="pb-0">
            <h4 class="font-weight-bold my-3">Title of the news</h4>
            <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
            <mdb-btn color="indigo" size="sm"><mdb-icon icon="clone" class="left"/> View project</mdb-btn>
          </mdb-card-body>
        </mdb-col>

        <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <mdb-view class="overlay rounded z-depth-1">
            <img src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>
          <mdb-card-body class="pb-0">
            <h4 class="font-weight-bold my-3">Title of the news</h4>
            <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
            <mdb-btn color="indigo" size="sm"><mdb-icon icon="clone" class="left"/> View project</mdb-btn>
          </mdb-card-body>
        </mdb-col> -->

      </mdb-row>
    </section>
  </mdb-container>
</template>

<script>
import { restaurantService } from '@/services/restaurantService'
import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask, mdbCard, mdbCardBody, mdbBtn, mdbIcon } from 'mdbvue';

export default {
  mixins: [restaurantService],
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