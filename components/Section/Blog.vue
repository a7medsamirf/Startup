<template>
    <section class="blog py-16">
    <v-container>

      <v-row  class="justify-center">
          <div class="text-center">
            <button class="title-btn rounded-xl elevation-0">Blog</button>
            <h2 class="text-color-default use-text-title2 ma-3 ">Knowledge Hub </h2>
          </div>

      </v-row>



    </v-container>

  </section>
</template>

<script>
export default {
    name: "Blog",
}
</script>

<style scoped lang="scss">



h2:first-child::nth-line(-n+2) {
  font-variant-caps: small-caps;
  color: red;
}
</style>

