<template>
    <div>
      <v-bottom-navigation class="hidden-lg-and-up" shift fixed :background-color="color" >
        <v-btn v-for="(item, i) in items" :key="i"  :to="localePath(item.to)" router>
         <span> {{ $t('MobileBar.' + item.title) }}</span>
          <v-icon dense>{{ item.icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  
  </template>
  
  <script>
    export default {
      name: "MobileBar",
      data() {
        return {
          items: [{
              icon: 'fa-thin fa-house',
              title: 'home',
              to: '/'
            },
            {
              icon: 'fa-thin fa-camcorder',
              title: 'الأفلام',
              to: '/movies'
            },
        {
              icon: 'fa-light fa-tv-retro',
              title: 'مسلسلات',
              to: '/'
            },
                  {
              icon: 'fa-thin fa-camcorder',
              title: 'الأفلام',
              to: '/'
            },
          ],
        }
  
      },
          computed: {
        color () {
          switch (this.value) {
            default: return 'default'
          }
        },
      },
    }
  
  </script>
  
  <style lang="scss">
    .v-bottom-navigation {
  /*     color: #fff !important;
      border-radius: 50px;
      transform: translate(25px, -20px) !important;
      width: 90% !important;
      padding: 10px !important; */
  
      span.v-btn__content {
        color: #fff;
      }
    }
  
    .container .bottombar #t1:checked~#back::after {
      transform: translate(75px, 0);
    }
  
  
    .v-item-group.v-bottom-navigation--fixed {
      display: inline-flex;
      align-items: center;
      padding: 10px 20px 15px;
      box-shadow: 0px 20px 40px rgb(18 34 64 / 10%);
    }
  
  </style>
  