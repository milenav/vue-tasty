<template>
<mdb-container>
	<mdb-card wide>
		<mdb-view hover cascade>
				<mdb-card-image :src="restaurantDetails.image" alt="Card image cap"></mdb-card-image>
				<mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
		</mdb-view>
		<mdb-card-body class="text-center pb-0" cascade>
			<mdb-card-title><strong>{{restaurantDetails.title}}</strong></mdb-card-title>
			<h5 class="blue-text"><strong>Graffiti Artist</strong></h5>
			<mdb-card-text>{{restaurantDetails.description}}</mdb-card-text>
			<a class="icons-sm li-ic"><mdb-icon fab icon="linkedin" /></a>
			<a class="icons-sm tw-ic"><mdb-icon fab icon="twitter" /></a>
			<a class="icons-sm fb-ic"><mdb-icon fab icon="facebook" /></a>
		</mdb-card-body>
	</mdb-card>
</mdb-container>
</template>

<script>
import { restaurantService } from '@/services/restaurantService'
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbMask, mdbIcon, mdbBtn, mdbView, mdbCardImage, mdbCardTitle, mdbCardText } from 'mdbvue';

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
      mdbBtn,
  		mdbCardImage,
			mdbCardTitle,
			mdbCardText,
    }
}
</script>