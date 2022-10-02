<template>
  <v-footer
    :absolute="!fixed"
    app
  >
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
    }
  }
}
</script>

<style scoped>

</style>
