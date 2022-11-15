<template>
    <section class="blog py-20">
    <v-container>

      <v-row  class="justify-center">
          <div class="text-center">
            <button class="title-btn rounded-xl elevation-0">{{ $t('blog.section-title') }}</button>
            <h2 class="text-color-default use-text-title2 ma-3 ">{{ $t('blog.section-description') }} </h2>
          </div>
      </v-row>


<v-row class="mt-10">
  <v-col cols="12" lg="4" md="4" sm="6" v-for="(blog, index) in BlogData" :key="index">
    <v-skeleton-loader
                  v-if="data_loaded"
                  type=" card-avatar, article, actions"
                >
                </v-skeleton-loader>
    <v-card  class="blog-card rounded-xl"
          outlined
          elevation-0
          v-if="!data_loaded"
        >
            <div class="blog-img">
              <v-img
                  :alt="blog.title"
                  :src="require(`~/static/images/blog/${blog.images}`)"
                ></v-img>

              <div class="sb-badge" :right="$vuetify.rtl">
                        <v-chip
                          class="ma-2 primary--text "
                          color="white"
                          label
                        >
                          {{ blog.tag }}
                        </v-chip>
                      </div>
            </div>
 <div class="pa-3">
            <v-list-item-content>
                  <v-list-item-title class="use-text-title5 text-color-default mb-2" v-text="$t(blog.title)" />
                  <v-list-item-subtitle class="use-text-paragraph" v-text="$t(blog.description)" />
              </v-list-item-content>

              <v-card-actions>
            <p class="blog-description">7 min read · September 12</p>
            <v-spacer></v-spacer>

            <v-btn v-if="!$vuetify.rtl" class="ma-2 pencil-btn" outlined fab small color="indigo"><i class="fa-duotone fa-right-long fa-lg"></i></v-btn>
            <v-btn v-else class="ma-2 pencil-btn" outlined fab small color="indigo"><i class="fa-duotone fa-left-long fa-lg"></i></v-btn>
          </v-card-actions>

 </div>



        </v-card>
  </v-col>

</v-row>

<v-row  class="justify-center mt-10">
          <div class="text-center">
            <button href="#" title="تواصل معنا" class="btn outline">{{ $t('common.Learn-more') }}</button>
          </div>
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
  @include left(10px);
  color: #FFF !important;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.blog-card{
  cursor: pointer;
  transition:  all 0.5s ease-in-out;
  .pencil-btn{
  position: relative;
  transition:  all 0.5s ease-in-out;
}
&:hover{
  transform: translateY(-10px);
  transition:  all 0.5s ease-in-out;
  .pencil-btn{
    transition:  all 0.5s ease-in-out;
    background-color: var(--maincolor);
    border: 1px solid var(--maincolor);
/*     @include translatex(10px); */
    color: #fff !important;
    box-shadow: $box-shadow;
  }
}
}


</style>

