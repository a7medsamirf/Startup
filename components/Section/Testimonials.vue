<template>
      <section class="Testimonials section-bg pa-16">
        <v-container>
            <v-row  class="justify-center">
          <div class="text-center">
            <button class="title-btn rounded-xl elevation-0">Testimonials</button>
            <h2 class="text-color-default use-text-title2 ma-3 ">Trusted by 100's of clients</h2>
          </div>
      </v-row>
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
            <v-avatar class="photo" width="80" height="80">
              <img :src="review.avatar" :alt="review.title">
            </v-avatar>
            <v-list-item-title class="use-text-title5 text-color-default mb-1 mt-3">
              {{ review.title }}
            </v-list-item-title>
          </div>

            <v-list-item >
              <v-list-item-content>

                <v-list-item-subtitle class="use-text-paragraph" v-text="$t(review.comment)"/>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>

        </div>

  </slick>

</div>


        </v-container>
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

<style lang="scss">
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
