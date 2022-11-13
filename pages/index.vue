<template>
<div>
    <Hero />
    <Features />
    <FromDesign />
    <Testimonials />
    <Blog />
  <Newsletter />
</div>
</template>

<script>
import Hero from "~/components/Section/Hero";
import Features from "~/components/Section/features";
import FromDesign from "~/components/Section/FromDesign";
import Testimonials from "~/components/Section/Testimonials";
import Blog from "~/components/Section/Blog";
import Newsletter from "~/components/Section/Newsletter";
export default {
  name: 'IndexPage',
  components: {Newsletter, Features, Hero, FromDesign, Testimonials, Blog  }
}
</script>
