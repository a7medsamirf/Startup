<template>
  <v-fade-transition mode="out-in">
    <v-tooltip v-if="!$vuetify.theme.dark" bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" fab @click="toggle_dark_mode">
          <v-icon size="20" >mdi-weather-night</v-icon>
        </v-btn>
      </template>
      <span>Dark Mode On</span>
    </v-tooltip>

    <v-tooltip v-else bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on"  fab @click="toggle_dark_mode">
          <v-icon size="20" color="yellow">mdi-white-balance-sunny</v-icon>
        </v-btn>
      </template>
      <span>Dark Mode Off</span>
    </v-tooltip>

  </v-fade-transition>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  data () {
    return {

    }
  },
  methods: {
    toggle_dark_mode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },
}
</script>
