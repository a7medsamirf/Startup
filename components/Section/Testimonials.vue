<template>
      <section class="Testimonials section-bg py-16">
        <v-container>
            <v-row>
          <div>
            <button class="title-btn rounded-xl elevation-0">Testimonials</button>
            <h2 class="text-color-default use-text-title2 my-3 ">Trusted by 100's of clients</h2>
          </div>
      </v-row>
    </v-container>
      <div class="ReviewCard pt-16" id="ReviewCard">
  <slick ref="slick" :options="slickOptions">
        <div class="review text-center"
             v-for="(review, index) in ReviewData"
             :key="index"
        >

        <div class="comment-block">

          <v-card
            class="mx-auto pa-5"
            outlined
          >
          <div class="person-block">
     
      
    

            <v-list-item >
              <v-list-item-content>
                <v-list-item-title class="use-text-title5 text-color-default mb-1 mt-3">
              {{ review.title }}
            </v-list-item-title>
                <v-list-item-subtitle class="use-text-paragraph" v-text="$t(review.comment)"/>
              </v-list-item-content>
            </v-list-item>

            <i class="fa-solid fa-house"></i>
            <v-list-item three-line>
              <v-avatar class="photo mr-3" width="70" height="70">
              <img :src="review.avatar" :alt="review.title">
            </v-avatar>

      <v-list-item-content>

        <v-list-item-title class="text-h5 mb-1">{{ review.title }}</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely</v-list-item-subtitle>
      </v-list-item-content>


    </v-list-item>
  </div>
          </v-card>
        </div>

        </div>

  </slick>

</div>


  
    </section>
</template>

<script>
import imgAPI from '~/static/images/imgAPI'
export default {
    name: "Testimonials",
    components: {
    Slick: () => import('vue-slick'),
  },
  data(){
    return {
      item: 0,
      imgAPI: imgAPI,
      ReviewData: [
        {
          avatar: imgAPI.avatar[3],
          title: 'Austin Evon',
          comment: 'common.comment',
        },
        {
          avatar: imgAPI.avatar[2],
          title: 'Alisa Gray',
          comment: 'common.comment',
        },
        {
          avatar: imgAPI.avatar[5],
          title: 'Jena Doe',
          comment: 'common.comment',
        },
        {
          avatar: imgAPI.avatar[4],
          title: 'Jena Doe',
          comment: 'common.comment',
        },
        {
          avatar: imgAPI.avatar[0],
          title: 'Jena Doe',
          comment: 'common.comment',
        },

      ],
      slickOptions: {
        slidesToShow: 3,
        centerMode: true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 800,
        autoplaySpeed: 3000,
        autoplay: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }

    }
  },
}
</script>

<style scoped lang="scss">
.ReviewCard {
  .comment-block {
    position: relative;
    margin-bottom: 35px;
    padding: 0 10px;
  }

}

.v-card{
  border-radius: 45px 45px 45px 15px !important;
}
</style>
