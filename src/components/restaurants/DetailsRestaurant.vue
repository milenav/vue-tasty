<template>
<mdb-container>
    <mdb-row>
      <mdb-col md="12">
        <!-- <mdb-card reverse>
          <mdb-view hover cascade>
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg" class="img-fluid" />
            <mdb-mask overlay="white-slight" class="waves-light" waves/>
          </mdb-view> -->


	<mdb-card wide>
		<mdb-view hover cascade>
				<img :src="restaurantDetails.image" alt="Card image cap" class="img-fluid"/>
				<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
		</mdb-view>  
		<mdb-card-body class="text-center pb-0  mb-2" cascade>
			<mdb-card-title><strong>{{restaurantDetails.title}}</strong></mdb-card-title>
			<mdb-card-text>{{restaurantDetails.description}}</mdb-card-text>
			<a class="icons-sm li-ic mr-3"><mdb-icon fab icon="linkedin" /></a>
			<a class="icons-sm tw-ic mr-3"><mdb-icon fab icon="twitter" /></a>
			<a class="icons-sm fb-ic"><mdb-icon fab icon="facebook" /></a>
		</mdb-card-body>
	  </mdb-card>
          </mdb-col>
    </mdb-row>
      <mdb-card class="mt-2">
    <mdb-card-body>
      This is some text within a panel body.<mdb-icon icon="plus-square" class="d-flex justify-content-end pink-text mr-2" size="lg"  />
    </mdb-card-body>
  </mdb-card>
      <mdb-card class="mt-2 mb-5">
    <mdb-card-body>
      This is some text within a panel body.    
    <mdb-icon icon="plus-square" class="d-flex justify-content-end text-pink pink-text mr-2" size="lg"  />
    </mdb-card-body>
  </mdb-card>
  <div class="d-flex justify-content-center mb-5">
  <router-link :to="{name: 'editRestaurant'}"> 
    <mdb-btn @click="onEdit" color="pink">Edit</mdb-btn>
  </router-link>
    <mdb-btn @click="onDelete" color="pink">Delete</mdb-btn>
  </div>
</mdb-container>


</template>

<script>
import { restaurantService } from '@/services/restaurantService'
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbBtn, mdbView, mdbCardImage, mdbCardTitle, mdbCardText } from 'mdbvue';

export default {
  data() {
    return {
      restaurant: {}
    }
  },
    mixins: [restaurantService],
    created() {
        this.detailsRestaurant(this.$route.params.id)      
    },
    methods: {
      onDelete() {
        this.deleteRestaurant(this.$route.params.id)
      },
      onEdit() {
        this.detailsRestaurant(this.$route.params.id)
        .then((data) => {
          console.log(data)

          this.$root.$emit('edit-details')
        })
      }
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
      mdbBtn,
  		mdbCardImage,
			mdbCardTitle,
      mdbCardText
    }
}
</script>