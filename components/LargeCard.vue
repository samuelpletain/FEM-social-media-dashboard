<script setup lang="ts">
  const props = defineProps<{
    social?: string,
    handle?: string,
    type?: string,
    count?: string,
    dailyCount?: number,
    trend?: string
  }>()
</script>

<template>
  <div class="large_card" :class="'large_card--' + props.social">
    <div class="large_card__social social">
      <img :src="'~/assets/img/icon-' + props.social + '.svg'" alt="" class="social__img">
      <p class="social__handle">{{ props.handle }}</p>
    </div>
    <p class="large_card__stats stats">{{ props.count }} <span class="stats__type">{{ props.type }}</span></p>
    <div class="large_card__daily_stats daily_stats">
      <img :src="'~/assets/img/icon-' + props.trend + '.svg'" alt="" class="daily_stats__arrow">
      <p class="daily_stats__count count" :class="'count--' + props.trend">{{ props.dailyCount }} Today</p>
    </div>
  </div>
</template>

<style lang="scss">
  .large_card {
    background: var(--card-background);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    text-align: center;
    padding: 2rem 2rem 1.5rem;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 4px;
      background: black;
      display: block;
    }
    &--facebook::after {
      background: $facebook;
    }
    &--twitter::after {
      background: $twitter;
    }
    &--instagram::after {
      background: $instagram;
    }
    &--youtube::after {
      background: $youtube;
    }
  }

  .social {
    display: flex;
    justify-content: center;
    gap: .5rem;
    align-items: center;
    &__handle {
      font-weight: $font-weight-bold;
      color: var(--text-neutral-100);
    }
    margin-bottom: 2rem;
  }

  .stats {
    font-weight: $font-weight-bold;
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: var(--text-neutral-400);
    &__type {
      margin-top: .5rem;
      text-transform: uppercase;
      color: var(--text-neutral-100);
      font-weight: $font-weight-regular;
      display: block;
      font-size: .9rem;
      letter-spacing: .25rem;
    }
  }

  .daily_stats {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3rem;
  }

  .count {
    font-weight: $font-weight-bold;
    &--up {
      color: $primary;
    }
    &--down {
      color: $secondary;
    }
  }
</style>e