<template>
  <section class="features section-bg py-16">
    <v-container>

      <v-row  class="justify-center">
          <div class="text-center">
            <button class="title-btn rounded-xl elevation-0">{{ $t('features.section-title') }}</button>
            <h2 class="text-color-default use-text-title2 ma-3 ">{{ $t('features.section-description') }}</h2>
          </div>

      </v-row>
      <u-animate-container>
        <v-row class="mt-10">
        <v-col cols="12" lg="3" md="4" sm="6" v-for="(item, index) in features" :key="index">
          <u-animate
          name="fadeIn"
          :delay="(0.4 * index) + 's'"
          duration="1s"
          :iteration="1"
          :offset="0"
          animateClass="animated"
          :begin="false"
        >

          <v-card class="text-center rounded-xl" outlined>
            <div class="card-img">
              <img :src="item.avatar" :alt="item.title">
            </div>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="use-text-title5 text-color-default mb-2" v-text="$t(item.title)" />
                <v-list-item-subtitle class="use-text-paragraph" v-text="$t(item.description)" />
              </v-list-item-content>

            </v-list-item>

          </v-card>
          
          </u-animate>
        </v-col>
      </v-row>
      </u-animate-container>

 


    </v-container>

  </section>
</template>

<script>
  import imgAPI from '~/static/images/imgAPI'
  export default {
    name: "features",
    data() {
      return {
        imgAPI: imgAPI,
        features: [{
            avatar: imgAPI.features[0],
            title: 'features.Product',
            description: 'features.description',
          },
          {
            avatar: imgAPI.features[1],
            title: 'features.Branding',
            description: 'features.description',
          },
          {
            avatar: imgAPI.features[2],
            title: 'features.Programming',
            description: 'features.description',
          },
          {
            avatar: imgAPI.features[3],
            title: 'features.Marketing',
            description: 'features.description',
          },
        ]
      }
    },
  }

</script>

<style scoped lang="scss">
  .features {
    .v-card {
        cursor: pointer;
        position: relative;
        display: block;
        overflow: hidden;
        z-index: 1;
        padding: 20px;
        transition: all 0.5s ease-in-out;
        &:hover{
          transform: translateY(-10px);
          .text-color-default,
          .use-text-paragraph{
            color: #fff;
          }
          &::before{
            transform: translate3d(0px, 0, 0px);
           bottom: 0;
          }
        }
      img {
        width: 80%;
      }
      &:before {
        position: absolute;
        top: 0;
        bottom: 5px;
        left: 0;
        right: 0;
        content: "";
        background-color: var(--maincolor);
        transition: all 500ms ease;
        transform: translate3d(0px, 100%, 0px);
        z-index: -1;
      }
    }
  }

  .v-card:hover {
    box-shadow: none;
    transition: all 0.5s ease-in-out;
    color: #fff;
  }

</style>
