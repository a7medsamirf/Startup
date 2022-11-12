<template>
  <section class="hero" id="hero">
    <v-container>
    <div class="hero-wrap">
      <div class="inner d-flex align-center justify-center">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-0">
              <div class="box">

<div class="title2">
    <span class="block"></span>
    <h1 class="ma-5 text-color-default hero-title ">{{ $t('HeroSection.title') }}<span></span></h1>
</div>

<div class="role">
    <div class="block"></div>
    <p class="use-text-subtitle ma-5 hero-subtitle">{{ $t('HeroSection.subtitle') }}</p>
</div>

</div>

    <!--           <div class="text box">
                <div class="title">
                  <h1 class="ma-5 text-color-default hero-title ">{{ $t('HeroSection.title') }}<span></span></h1>
                </div>
                <div class="role">
            <div class="block"></div>
            <p class="use-text-subtitle ma-5 hero-subtitle">{{ $t('HeroSection.subtitle') }}</p>
        </div>
 
                <button  href="#" title="تواصل معنا" class="btn default ma-5 pa-5"> {{ $t('common.discuss') }}</button>
                <button href="#" title="تواصل معنا" class="btn outline">{{ $t('common.Learn-more') }}</button>
              </div>
 -->



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





.box {


    .title2 {
      width: 100%;
      position: relative;
      height: 150px;

      .block {
        width: 0%;
        height: inherit;
        background: #ffb510;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        display: flex;
      }

      h1 {
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        span {
          width:0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
          animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;

        }
      }
    }

    .role {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 100px;
    margin-top: 20px;

      .block {
        width: 0%;
        height: inherit;
        background: #e91e63;
        position: absolute;
        animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
      }
    }
  }

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;

  }
  50% {
    width: 100%;
    left: 0;

  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
   65% {
      width: 7px;
    height: 7px;
      bottom: 0px;
      width: 15px
   }
   80% {
      width: 10px;
    height: 10px;
      bottom: 20px
   }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;

  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

</style>
