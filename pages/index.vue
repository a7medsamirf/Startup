<template>
<div>
    <Hero />
    <Features />
</div>
</template>

<script>
import Hero from "~/components/Section/Hero";
import Features from "~/components/Section/features";
export default {
  name: 'IndexPage',
  components: {Features, Hero}
}
</script>
