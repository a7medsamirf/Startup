<template>
<div>
    <Hero />
    <Features />
    <Fromdesign />
</div>
</template>

<script>
import Hero from "~/components/Section/Hero";
import Features from "~/components/Section/features";
import Fromdesign from "~/components/Section/Fromdesign.vue";
export default {
  name: 'IndexPage',
  components: { Features, Hero, Fromdesign }
}
</script>
