<template>
  <section class="hero">
    <v-container>
    <div class="hero-wrap">
      <div class="inner d-flex align-center justify-center">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-0">
              <div class="text">
                <h1 class="ma-5 text-color-default hero-title ">{{ $t('HeroSection.title') }}</h1>
                <p class="use-text-subtitle ma-5 hero-subtitle">{{ $t('HeroSection.subtitle') }}</p>

                <button  href="#" title="تواصل معنا" class="btn default ma-5 pa-5"> {{ $t('common.discuss') }}</button>
                <button href="#" title="تواصل معنا" class="btn outline">{{ $t('common.Learn-more') }}</button>


              </div>
            </v-col>
            <v-col cols="12" md="6" class="px-0 mt-16">
              <div class="img-box hidden-sm-and-down">
                <v-img
                  max-width="85%"
                  class="rocket-bg"
                  alt="rocket Bg"
                  :lazy-src="require('static/images/hero/white-bg.webp')"
                  :src="require('static/images/hero/white-bg.webp')"
                ></v-img>
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
  name: "Hero"
}
</script>

<style scoped lang="scss">
.hero-wrap{
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  align-items: center;
  position: relative;
  display: block;
  height: 100vh;
  .hero-title {
    text-transform: capitalize;
    font-size: 58px !important;
    font-weight: 900;
  }
  .inner {
    height: 100%;
    .img-box {
      position: relative;
      text-align: center;
      .rocket-img {
        position: relative;
        z-index: 1;
        animation: myAnim 3s ease-out 0s infinite alternate forwards;
      }
      .rocket-bg {
        position: absolute;

      }
    }
  }

}
@keyframes myAnim {
	0% {
		transform: translateY(0);
	}

	100% {
		transform: translateY(-50px);
	}
}






</style>
