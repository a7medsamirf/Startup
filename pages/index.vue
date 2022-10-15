<template>
<div>
    <Hero />
    <Features />
    <Fromdesign />
    <Testimonials />
</div>
</template>

<script>
import Hero from "~/components/Section/Hero";
import Features from "~/components/Section/features";
import Fromdesign from "~/components/Section/Fromdesign.vue";
import Testimonials from "~/components/Section/Testimonials.vue";
export default {
  name: 'IndexPage',
  components: { Features, Hero, Fromdesign, Testimonials }
}
</script>
