<template>
   <section class="banner">
    <figure class="banner__figure">
      <img
        class="banner__img"
        :src="src"
        alt="error 404"
        width="287"
        height="240"
      />
    </figure>
  </section>
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./image.scss";
</style>
