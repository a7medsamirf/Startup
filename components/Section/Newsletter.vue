<template>
  <div class="pt-16">
    <v-container>
    <section class="Newsletter section-bg py-20 rounded-xl">

        <v-container>
          <v-row class="justify-center">
            <v-col cols="12" md="5" class="px-06">
              <div class="img-box hidden-sm-and-down">
                <v-img
                  max-width="40%"
                  class="rocket-bg"
                  alt="rocket"
                  :lazy-src="require('static/images/rocket.png')"
                  :src="require('static/images/rocket.png')"
                ></v-img>
              </div>
            </v-col>
            <v-col cols="12" md="5" class="px-0">
              <div class="text">
                <h2 class="text-color-default use-text-title ma-3 ">{{ $t('Newsletter.title') }}</h2>
                <p class="use-text-subtitle ma-5 hero-subtitle">{{ $t('Newsletter.description') }}</p>
                <button  href="#" title="تواصل معنا" class="btn default ma-5 pa-5"> {{ $t('common.discuss') }}</button>
              </div>
            </v-col>

          </v-row>
        </v-container>


    </section>
  </v-container>
  </div>

</template>

<script>
export default {
    name: "Newsletter",

}
</script>

<style lang="scss" scoped>
.Newsletter{
  position: relative;
  .rocket-bg{
    position: absolute;
    top: -100px;
    animation: myAnim 3s ease-out 0s infinite alternate forwards;
  }

}


@keyframes myAnim {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-20px);
  }
}</style>
