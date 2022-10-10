<template>
  <div>

    <div id="footer" class="pa-0">
      <v-footer class="pt-20">
        <v-container>
          <v-row>
            <v-col cols="12" lg="4" md="6" sm="12">
              <button class="title-btn rounded-xl elevation-0">contact us</button>
              <v-list-item-title class="use-text-title2 mt-3"> Hello@Startup.com </v-list-item-title>
            </v-col>
            <v-col cols="12" lg="2" md="6" sm="12">
              <div class="widget-tittle ma-2"><h2>Quick Links</h2> <span></span></div>

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
                    <v-list-item-icon class="ma-3">
                      <v-icon small v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

            </v-col>
            <v-col cols="12" lg="2" md="6" sm="12">
              <div class="widget-tittle ma-2"><h2>Quick Links</h2> <span></span></div>

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
                    <v-list-item-icon class="ma-3">
                      <v-icon small v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

            </v-col>
            <v-col cols="12" lg="4" md="6" sm="12">
              <div class="widget-tittle ma-2"><h2>Contact Us</h2> <span></span></div>
              <v-list class="Quick-Links">
                <v-list-item-group>
                  <v-list-item
                    class="no-active"
                    v-for="(Contact, i) in Contacts"
                    :key="i"
                  >
                    <v-list-item-icon class="ma-3">
                      <v-icon  small v-text="Contact.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="Contact.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

            </v-col>

            <v-col
              class="lighten-2 text-center"
              cols="12"
            >
              <v-divider class="white--text"></v-divider>
              <div class="py-4" >
                {{ new Date().getFullYear() }} — <strong>MedHouse</strong>
              </div>            </v-col>

          </v-row>
        </v-container>

      </v-footer>

    </div>
  </div>
</template>

<script>
export default {
  name: "The-Footer",
  data: () => ({
    Services: [
      { text: 'Real-Time', icon: 'fi-rr-phone-call' },
      { text: 'Audience', icon: 'fi-rr-envelope' },
      { text: 'Conversions', icon: 'fi-rr-envelope' },
    ],
    items: [
      { text: 'Faq', icon: 'fi-rr-envelope', to: '/faq' },
      { text: 'Audience', icon: 'fi-rr-envelope' },
      { text: 'Conversions', icon: 'fi-rr-envelope' },
    ],
    Contacts: [
      { text: '+020123456789', icon: 'fi-rr-phone-call' },
      { text: 'info@MedHouse.com', icon: 'fi-rr-envelope' },
      { text: 'hello@MedHouse.com', icon: 'fi-rr-envelope' },
      { text: 'Cairo, Egypt', icon: 'fi-rr-marker' },
    ],

  }),
}

</script>

<style scoped lang="scss">
#footer
{
  .footer-subscribe .v-icon
  {
    width: 35px;
    height: 35px;
    line-height: 37px;
    font-size: 18px;
    border-radius: 50%;
    color: #fff;
    background-color: #ff8e28;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    animation: flashing 1.5s infinite linear;
    position: absolute;
    top: 5px;
    right: 6px;
    padding: 6px;
    text-align: center;
  }
  .Quick-Links
  {
    background: transparent;
  }
  .no-active::before {
    opacity: 0 !important;
  }
}

</style>
