<template>
  <div class="links">
    <v-btn class="lang-btn" icon
           v-for="locale in $i18n.locales"
           v-if="locale.code !== $i18n.locale"
           :key="locale.code"
           @click="changeLanguage(locale.code)"
    >
      {{ locale.name }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Settings",
  methods: {
    changeLanguage(code) {
      this.Lang = code;
      this.$i18n.setLocale( code);
      this.$vuetify.rtl = code === "ar";
    },
  },
  mounted() {
    this.$vuetify.rtl = this.$i18n.locale === "ar";
    this.Lang = this.$i18n.locale;

  },

}
</script>
