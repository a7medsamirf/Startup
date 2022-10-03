<template>
  <section class="hero">
    <div class="hero-wrap">
      <div class="inner d-flex align-center justify-center">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="text">
                <h1 class="ma-5 text-color-default hero-title ">{{ $t('HeroSection.title') }}</h1>
                <p class="use-text-subtitle2 ma-5 hero-subtitle">{{ $t('HeroSection.subtitle') }}</p>

                <a  href="#" title="تواصل معنا" class="btn ma-5 pa-5"> {{ $t('common.discuss') }}</a>
                <a href="#" title="تواصل معنا" class="btn outline">{{ $t('common.Learn-more') }}</a>


              </div>
            </v-col>
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="img-box hidden-sm-and-down">
                <v-img
                  class="rocket-bg"
                  alt="rocket Bg"
                  :src="require('static/images/hero/white-bg.png')"
                ></v-img>
                <v-img
                  class="rocket-img"
                  alt="rocket"
                  :src="require('static/images/hero/white-rocket.png')"
                >
                </v-img>

              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
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
      }
      .rocket-bg {
        position: absolute;

      }
    }
  }

}

.btn.outline{
  background-color: transparent;
  outline: 1px solid #356DFF;
  outline-offset: -1px;
  color: #356DFF;
}
.btn {
  background: #356DFF;
  padding: 1em 1.5em;
  color: #fff;
  border-radius: 5px;
  margin-block: 1em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1rem;
  transition: 0.2s ease;
  min-width: 115px;
  height: 3em;
  box-shadow: 3px 3px 0px #356DFF;
}
.btn:hover {
  transform: scale(0.95);
  box-shadow: 1px 1px 0px #356DFF;
}



</style>
