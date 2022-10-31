<template>
  <div class="SocialMedia mt-3">
    <ul class="pa-0">
      <li class="widget-tittle mr-3"><h3> {{ $t('footer.Social-Media') }} </h3></li>
      <li class="Social-icon"><i class="fa-brands fa-instagram"></i></li>
      <li class="Social-icon"><i class="fa-brands fa-facebook-f"></i></li>
      <li class="Social-icon"><i class="fa-brands fa-twitter"></i></li>
    </ul>
  </div>
</template>
<script>
  export default {

    name: "SocialMedia",
    data() {
      return {
        SocialIcon: []
      }
    }
  }

</script>
<style lang="scss" scoped>
  .SocialMedia {
    position: relative;
    ul {
      li{
        display: inline-block;
        &.Social-icon {
        padding: 10px;
        cursor: pointer;
        border: 1px solid var(--maincolor);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        font-size: 17px;
        line-height: 20px;
        transition: all 0.5s ease-in-out;
        &:hover{
            background: var(--maincolor);
            color: #fff;
        }
      }
      }
    }
  }

</style>