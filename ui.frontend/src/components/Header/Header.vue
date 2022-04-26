<template>
  <header class="header">
    <h1 class="header__title"> {{ text }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['text']
}
</script>

<style lang="scss" scoped>
@import "./header.scss";
</style>
