<template>
<section class="features section-bg pa-16">
  <v-container>
    <v-row>
      <v-col cols="12" md="12" class="">
        <div class="text-center">
          <v-btn
            x-small
            color="secondary"
            dark
          >
            Extra small Button
          </v-btn>
          <h5 class="ma-3 warning">features</h5>
          <h2 class="text-color-default ma-3 Welcome-text-title">Your Dream Template</h2>
        </div>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12" lg="3" md="4" sm="6"
             v-for="(item, index) in features"
             :key="index" >
        <v-card
          class="text-center rounded-xl"
          outlined
        >
          <div class="card-img">
            <img :src="item.avatar" :alt="item.title">
          </div>
          <!--        <v-img
                    class="rocket-img"
                    max-width="150"
                    :alt="item.title"
                    :lazy-src="item.avatar"
                    :src="item.avatar"
                  >
                  </v-img>-->

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="use-text-subtitle text-color-default mb-2"  v-text="$t(item.title)"/>
              <v-list-item-subtitle class="use-text-paragraph" v-text="$t(item.description)"/>
            </v-list-item-content>

          </v-list-item>

        </v-card>
      </v-col>
    </v-row>
  </v-container>

</section>
</template>

<script>
import imgAPI from '~/static/images/imgAPI'
export default {
  name: "features",
  data(){
    return {
      imgAPI: imgAPI,
      features: [
        {
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
.features{
  .v-card{

    img{
      width: 80%;
    }
    &:before{
      content: "";
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: #000;
    }
  }
}

.v-card:hover{
  box-shadow: none;
  transition: all 0.5s ease-in-out;
}


</style>
