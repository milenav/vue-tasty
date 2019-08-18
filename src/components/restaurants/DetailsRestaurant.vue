<template>
  <mdb-container>
    <mdb-row>
      <mdb-col md="12">
        <mdb-card reverse  v-for="restaurant in restaurants" :key="restaurant._id">
          <mdb-view hover cascade>
            <img :src="restaurant.image" class="img-fluid" />
            <mdb-mask overlay="white-slight" class="waves-light" />
          </mdb-view>
          <mdb-card-body class="text-center cascade">
            <h2 class="font-weight-bold">
              <a>{{restaurant.title}}</a>
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
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem.
          </p>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
            eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
          </p>
        </mdb-container>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { restaurantService } from '@/services/restaurantService'
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbView, mdbBtn } from 'mdbvue';
export default {
    data() {
        return {
            restaurants: []
        }
    },
    mixins: [restaurantService],
    created() {
        this.detailsRestaurant(this.$route.params._id)
        
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