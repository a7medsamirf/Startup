<template>
  <div>

    <div id="footer" class="pa-0">
      <div class="pt-20">
        <v-container>
          <v-row>
            <v-col cols="12" lg="5" md="6" sm="12">
              <button class="title-btn rounded-xl elevation-0">  {{ $t('footer.contactus') }}</button>
              <v-list-item-title v-if="!$vuetify.rtl" class="use-text-title2 mt-3"> Hello@Startup.com   <i class="fa-duotone fa-arrow-up-right"></i></v-list-item-title>
              <v-list-item-title v-else class="text-color-default use-text-title2 mt-3"> Hello@Startup.com   <i class="fa-duotone fa-arrow-up-left"></i></v-list-item-title>

              <social-media />
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12">
              <div class="widget-tittle ma-2"><h3 class="text-color-default">{{ $t('footer.QuickLinks') }}</h3> <span></span></div>
              <v-row>
                <v-col lg="4" md="6" sm="12">
                  <v-list class="Quick-Links">
                <v-list-item-group>
                  <v-list-item
                    class="no-active"
                    v-for="(Service, i) in Services"
                    :key="i"
                    :to="Service.to"
                    router
                    active-class="no-active"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="Service.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
                </v-col>
                <v-col lg="4" md="6" sm="12">
                  <v-list class="Quick-Links">
                <v-list-item-group>
                  <v-list-item
                    class="no-active"
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.to"
                    router
                    active-class="no-active"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
                </v-col>
                <v-col lg="4" md="6" sm="12">
                  <v-list class="Quick-Links">
                <v-list-item-group>
                  <v-list-item
                    class="no-active"
                    v-for="(Contact, i) in Contacts"
                    :key="i"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="Contact.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
                </v-col>
              </v-row>



            </v-col>

            <v-col
              class="lighten-2 text-center"
              cols="12"
            >
              <v-divider class="white--text"></v-divider>
              <div class="py-4" >
                {{ $t('footer.Copyright') }}
                {{ new Date().getFullYear() }} © <strong>StartUp</strong>. 
                {{ $t('footer.reserved') }}
              </div>
              </v-col>

          </v-row>
        </v-container>

      </div>

    </div>
  </div>
</template>

<script>
import SocialMedia from '../SocialMedia.vue'
export default {
  components: { SocialMedia },
  name: "The-Footer",
  data: () => ({
    Services: [
      { text: 'Home' },
      { text: 'Journey'},
      { text: 'Technology'},
      { text: 'Team'},
    ],
    items: [
      { text: 'Vision'},
      { text: 'Thinking'},
      { text: 'Join us'},
      { text: 'Connect'},
    ],
    Contacts: [
      { text: 'Privacy & Terms' },
      { text: 'Google'},
      { text: 'Alphabet'},
    ],

  }),
}


</script>

<style scoped lang="scss">
#footer
  .Quick-Links
  {
    background: transparent;
  }
  .no-active::before {
    opacity: 0 !important;
  }

i.fa-duotone.fa-arrow-up-right,
i.fa-duotone.fa-arrow-up-left {
    width: 50px;
    height: 50px;
    background: var(--maincolor);
    border-radius: 50%;
    text-align: center;
    color: #fff;
    line-height: 50px;
    font-size: 25px;
}

</style>
