<template>
    <section class="Fromdesign pa-16">
        <v-container>
    <div class="hero-wrap">
      <div class="inner d-flex align-center justify-center">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-0">
              <div class="text">
                <h2 class="text-color-default use-text-title2 ma-3 ">{{ $t('Fromdesign.title') }}  </h2>

                <p class="use-text-subtitle ma-5 hero-subtitle">{{ $t('Fromdesign.subtitle') }}</p>

                <button  href="#" title="تواصل معنا" class="btn default ma-5 pa-5"> chfdgdfj</button>


              </div>
            </v-col>
            <v-col cols="12" md="6" class="px-0 mt-16">
              <div class="img-box hidden-sm-and-down">
                <v-img
                  class="rocket-img"
                  alt="rocket"
                  :lazy-src="require('static/images/hero/white-rocket.webp')"
                  :src="require('static/images/hero/white-rocket.webp')"
                >
                </v-img>

              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    </v-container>

    </section>
</template>

<script>
export default {
    name: "Fromdesign",
}
</script>

<style lang="scss" scoped>

</style>>

</style>