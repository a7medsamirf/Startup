<template>
  <div>
    <!---------- Start Navigation Drawer ---------->
    <v-navigation-drawer class="hidden-md-and-up" v-model="drawer"  fixed :right="$vuetify.rtl">
      <v-list-item class="pa-3">
        <div class="logo">
          <NuxtLink to="/">
            <v-img max-height="50" max-width="160" :src="require('static/images/logo/dark-logo.png')" ></v-img>
          </NuxtLink>
        </div>
        <v-spacer></v-spacer>
        <v-btn class="close-icon" icon @click="drawer = !drawer"> <v-icon>mdi-close</v-icon></v-btn>
      </v-list-item>
      <sidebar />
    </v-navigation-drawer>
    <!---------- End Navigation Drawer ---------->

    <!---------- Start App Bar ---------->
    <v-app-bar app height="85px" fixed  elevation="0">
      <v-container class="pa-0 fill-height">
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer" />

        <NuxtLink :to="localePath('/')" >
          <v-img v-if="!$vuetify.theme.dark" max-height="50" max-width="160" :src="require('static/images/logo/dark-logo.png')" ></v-img>
          <v-img v-else max-height="50" max-width="160" :src="require('static/images/logo/white.png')" ></v-img>
        </NuxtLink>

        <v-spacer />
        <v-toolbar-items
          class="hidden-md-and-down DesktopNav"
          v-for="(item, i) in items" :key="i">
          <v-btn text
                 v-if="!item.subitems"
                 exact
                 :to="localePath(item.to)" router>
                 {{$t(item.title)}}
          </v-btn>

          <v-menu
            class="elevation-0"
            open-on-hover :close-on-content-click="false"
            transition="slide-y-transition"
            content-class="nav-menu"
            min-width="200"
            v-else
            :key="item.title"
            :value="false"
            exact
            active-class="primary--text"
          >
            <!--       open-on-hover bottom offset-y transition="scroll-y-reverse-transition" -->

            <template v-slot:activator="{ on, attrs }">
              <v-btn :ripple="false" text v-bind="attrs" v-on="on" >{{$t(item.title)}}<v-icon right>mdi-chevron-down</v-icon></v-btn>

            </template>
            <v-list>
              <v-list-item
                v-for="subitem in item.subitems"
                :to="localePath(subitem.to)"
                :key="subitem.title"
                active-class="primary--text"
                exact
              >
                <v-list-item-title v-text="$t(subitem.title)" />
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>

    <Settings />
        <ThemeSwitcher/>

      </v-container>
    </v-app-bar>
    <!---------- End App Bar ---------->

  </div>
</template>

<script>
import Sidebar from "~/components/Header/Sidebar";
import Settings from "~/components/Header/Settings";
import ThemeSwitcher from "~/components/Header/ThemeSwitcher";
export default {
  components: {ThemeSwitcher, Settings, Sidebar},
  name: "TheHeader",
  data () {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      fixed: false,
      Lang : '',
      items: [
        {title: 'nav.Home', to: '/'},
        {title: 'nav.solutions', to: '/Solutions'},
        {title: 'nav.Services', to: '/Services'},
        {title: 'nav.about-Us', to: '/about-Us'},


      ],

    }
  },

}
</script>

<style scoped lang="scss">
.v-toolbar .v-btn:before {
  background-color: transparent;
  border-radius: 3px;
  bottom: unset;
  color: inherit;
  content: "";
  left: 0px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;

}
header.v-toolbar a.v-btn--active {
  color: #0B0D39 !important;
}
header.v-toolbar a.v-btn--active:after {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3063e9;
  position: absolute;
  bottom: 10px;
}
</style>
