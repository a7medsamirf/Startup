<template>
<div>
    <Hero />
    <Features />
    <FromDesign />
    <Testimonials />
    <Blog />
</div>
</template>

<script>
import Hero from "~/components/Section/Hero";
import Features from "~/components/Section/features";
import FromDesign from "~/components/Section/FromDesign.vue";
import Testimonials from "~/components/Section/Testimonials.vue";
import Blog from "~/components/Section/Blog.vue";
export default {
  name: 'IndexPage',
  components: { Features, Hero, FromDesign, Testimonials, Blog }
}
</script>
