<template>
    <section class="FromDesign py-20">
        <v-container>
    <div class="hero-wrap">
      <div class="inner d-flex align-center justify-center">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="5" class="px-0">
              <div class="text">
                <h2 class="text-color-default use-text-title ma-3 ">{{ $t('FromDesign.title') }}  </h2>
                <p class="use-text-paragraph ma-5 hero-subtitle">{{ $t('FromDesign.subtitle') }}</p>
                <button  href="#" title="تواصل معنا" class="btn default ma-5 pa-5"> {{ $t('common.discuss') }}</button>
              </div>
            </v-col>
            <v-col cols="12" md="7" class="px-0 mt-16">
              <div class="img-box">
                <v-img
                  class="widget-img"
                  alt="widget"
                  :lazy-src="require('static/images/widget-11.png')"
                  :src="require('static/images/widget-11.png')"
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
    name: "FromDesign",
}
</script>

<style lang="scss" scoped>

</style>>

