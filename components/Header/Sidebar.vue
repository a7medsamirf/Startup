<template>
  <div>
    <!---------- Start Navigation Drawer ---------->
    <v-list nav dense >
      <div v-for="(link, i) in links" :key="i">
        <v-list-item
          v-if="!link.subLinks"
          :to="localePath(link.to)"
          active-class="primary--text"
          class="v-list-item"
          exact
        >
          <v-list-item-icon>
            <v-icon small>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="$t(link.title)" />
        </v-list-item>

        <v-list-group
          v-else
          exact
          :key="link.title"
          :prepend-icon="link.icon"
          active-class="primary--text"
        >
          <template v-slot:activator>
            <v-list-item-title v-text="$t(link.title)"/>
          </template>

          <v-list-item
            exact
            v-for="sublink in link.subLinks"
            :to="localePath(sublink.to)"
            :key="sublink.title"
          >
            <v-list-item-icon>
              <v-icon small>{{ sublink.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="$t(sublink.title)" />
          </v-list-item>

        </v-list-group>

      </div>

    </v-list>
    <!---------- End Navigation Drawer ---------->
  </div>
</template>
<script>

export default {
  name: "Sidebar",
  data () {
    return {
      links: [
        {title: 'nav.Home', to: '/', icon: 'fi-rr-home'},
        {title: 'nav.solutions', to: '/solutions', icon: 'fi-rr-home'},
        {title: 'nav.Services', to: '/Services', icon: 'fi-rr-home'},
        {title: 'nav.about-Us', to: '/about-Us', icon: 'fi-rr-home'},
      ],

    }

  },


}
</script>
