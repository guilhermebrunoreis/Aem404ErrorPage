<template>
  <section class="card">
    <h1 class="card__title">{{ title }}</h1>
    <p class="card__description">{{ description }}</p>
    <button class="card__button">
      <span class="card__button-title">{{ buttonTitle }}</span>
    </button>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: 'I have bad news for you'
    },
    description: {
      type: String,
      default:
        'The page you are looking for might be removed or is temporarily unavailable'
    },
    buttonTitle: {
      type: String,
      default: 'Back to homepage'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./card.scss";
</style>
