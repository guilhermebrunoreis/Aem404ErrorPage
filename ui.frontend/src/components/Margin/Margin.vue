<template>
  <div :class="style[size]"></div>
</template>

<script>
import style from './margin.module.scss'
export default {
  name: 'Margin',
  props: {
    size: {
      type: String,
      default: 'xs'
    }
  },
  data () {
    return {
      style
    }
  }
}
</script>
