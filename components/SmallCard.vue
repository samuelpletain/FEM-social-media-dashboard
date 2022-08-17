<script setup lang="ts">
  const props = defineProps<{
    title?: string,
    social?: string
    count?: string,
    percentage?: number,
    trend?: string  
  }>()
</script>

<template>
  <div class="small_card">
    <p class="small_card__title">{{ props.title }}</p>
    <img :src="'~/assets/img/icon-' + props.social + '.svg'" alt="" class="small_card__logo">
    <p class="small_card__count">{{ props.count }}</p>
    <div class="small_card__percentage_trend percentage_trend">
      <img :src="'~/assets/img/icon-'+ props.trend + '.svg'" alt="" class="percentage_trend__arrow">
      <p class="percentage_trend__percentage percentage" :class="'percentage--' + props.trend">{{ props.percentage}}%</p>
    </div>
  </div>
</template>

<style lang="scss">
  .small_card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem;
    background: var(--card-background);
    border-radius: 10px;
    font-weight: $font-weight-bold;
    align-items: center;
    row-gap: 2rem;
    & :nth-child(even) {
      justify-self: end;
    }
    & :last-child {
      align-self: end;
    }
    &__title {
      color: var(--text-neutral-100);
    }
    &__count {
      font-size: 2rem;      
      color: var(--text-neutral-400);
    }
  }

  .percentage_trend {
    display: flex;
    font-size: 1rem;
    align-items: center;
    gap: .25rem
  }

  .percentage {
    &--up {
      color: $primary;
    }
    &--down {
      color: $secondary;
    }
  }
</style>