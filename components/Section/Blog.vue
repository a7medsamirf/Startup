<template>
    <section class="blog py-16">
    <v-container>

      <v-row  class="justify-center">
          <div class="text-center">
            <button class="title-btn rounded-xl elevation-0">Blog</button>
            <h2 class="text-color-default use-text-title2 ma-3 ">Knowledge Hub </h2>
          </div>

      </v-row>


<v-row class="mt-10">
  <v-col cols="12" lg="4" md="4" sm="6" v-for="(blog, index) in BlogData" :key="index">
    <v-skeleton-loader
                  v-if="data_loaded"
                  type=" card-avatar, article, actions"
                >
                </v-skeleton-loader>
    <v-card  class=" rounded-xl"     
          outlined
          elevation-0
          v-if="!data_loaded"
        >
            <div class="blog-img">
              <v-img
              class=" rounded-xl"
                alt=""
                :src="require(`~/static/images/blog/1.png`)"
              ></v-img>
              <div class="sb-badge">
                        <v-chip
                          class="ma-2 white--text "
                          color="primary"
                          label
                        >
                          {{ blog.tag }}
                        </v-chip>
                      </div>
            </div>

            <v-card-title class="blog-title">{{ blog.title }}</v-card-title>
  
          <v-card-text>
            <p class="blog-description">7 min read · September 12</p>
          </v-card-text>
          <v-card-actions>
            <v-btn x-large color="white" class="button figs-btn pa-5 white--text">Read More </v-btn>


          </v-card-actions>
        </v-card>
  </v-col>

</v-row>



    </v-container>

  </section>
</template>

<script>
export default {
    name: "Blog",
    data () {
    return {
      data_loaded : true,
      BlogData: [
        {
          title: 'common.reviewtitle1',
          date: 'Austin Evon',
          tag: 'Business',
        },
        {
          title: 'common.reviewtitle2',
          name: 'Alisa Gray',
          tag: 'Branding',
        },
        {
          title: 'common.reviewtitle3',
          name: 'Jena Doe',
          tag: 'Product Design',
        },

      ],
    }
  },
  mounted(){
    setTimeout(()=>{
      this.data_loaded= false;
    } , 2000);
  },
}
</script>

<style scoped lang="scss">

h2:first-child::nth-line(-n+2) {
  font-variant-caps: small-caps;
  color: red;
}

h2::first-word {
  float: left;
  font-size: 300%;
  margin: 0 10px 10px 0;
}
.sb-badge {
  position: absolute;
  z-index: 2;
  top: 20px;
  border-radius: 3px;
  left: 10px;
  color: #FFF !important;
  font-size: 14px;
  display: flex;
  align-items: center;
}
</style>

