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
              :alt="blog.title"
                :src="blog.images"
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
            <v-list-item >
              <v-list-item-content>
                <v-list-item-title class="use-text-title5 text-color-default mb-2" v-text="$t(blog.title)" />
                <v-list-item-subtitle class="use-text-paragraph" v-text="$t(blog.description)" />
              </v-list-item-content>
            </v-list-item>
   

          <v-card-text>
            <p class="blog-description">7 min read · September 12</p>
          </v-card-text>
          <v-card-actions>

            <v-btn class="ma-2" outlined fab small color="indigo"><v-icon>mdi-pencil</v-icon></v-btn>
          </v-card-actions>
        </v-card>
  </v-col>

</v-row>



    </v-container>

  </section>
</template>

<script>
  import imgAPI from '~/static/images/imgAPI'
export default {
    name: "Blog",
    data () {
    return {
      imgAPI: imgAPI,
      data_loaded : true,
      BlogData: [
        {
          images: imgAPI.blog[0],
          title: 'blog.title',
          description: 'blog.description',
          date: 'Austin Evon',
          tag: 'Business',
        },
        {
          images: imgAPI.blog[1],
          title: 'blog.title',
          description: 'blog.description',
          name: 'Alisa Gray',
          tag: 'Branding',
        },
        {
          images: imgAPI.blog[2],
          title: 'blog.title',
          description: 'blog.description',
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

