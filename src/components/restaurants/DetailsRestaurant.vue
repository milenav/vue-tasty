<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="12">
        <mdb-card reverse>
          <mdb-view hover cascade>
            <img :src="restaurantDetails.image" class="img-fluid" />
            <mdb-mask overlay="white-slight" class="waves-light" />
          </mdb-view>
          <mdb-card-body class="text-center cascade">
            <h2 class="font-weight-bold">
              {{restaurantDetails.title}}
            </h2>
            <p>Written by
              <a>
                <strong>Abby Madison</strong>
              </a>, 21/08/2018</p>
            <mdb-btn class="btn-fb waves-light">
              <mdb-icon fab icon="facebook" class="pr-2"/>
              Facebook
            </mdb-btn>
            <span class="counter">87</span>
            <mdb-btn class="btn-tw waves-light">
              <mdb-icon fab icon="twitter" class="pr-2"/>
              Twitter
            </mdb-btn>
            <span class="counter">73</span>
            <mdb-btn class="btn-gplus waves-light">
              <mdb-icon fab icon="google-plus" class="pr-2"/>
              Google
            </mdb-btn>
            <span class="counter">91</span>
            <mdb-btn color="default" class="waves-light">
              <mdb-icon fab icon="comments" class="pr-2"/>
              Comments
            </mdb-btn>
            <span class="counter">67</span>
          </mdb-card-body>
        </mdb-card>
        <mdb-container class="mt-5">
          <p>{{restaurantDetails.description}}</p>
        </mdb-container>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { restaurantService } from '@/services/restaurantService'
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbView, mdbBtn } from 'mdbvue';

export default {
    mixins: [restaurantService],
    created() {
        this.detailsRestaurant(this.$route.params.id)      
    },
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbMask,
      mdbIcon,
      mdbView,
      mdbBtn
    }
}
</script>