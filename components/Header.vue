<script setup lang="ts">
  const theme = useTheme()
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <h1 class="header__title">Social Media Dashboard</h1>
      <p class="header__follower_count">Total followers: 23,004</p>
      <div class="header__theme_switcher theme_switcher">
        <p class="theme_switcher__title">Dark Mode</p>
        <button class="theme_switcher__toggle" :class="theme ? 'toggle--on' : ''" @click="theme = !theme"></button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .header {
    font-weight: $font-weight-bold;
    background: var(--background-top);
    color: var(--text-neutral-100);
    padding: 2rem 1.5rem 5rem;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    &__title {
      font-size: 1.5rem;
      margin-bottom: .5rem;
      color: var(--text-neutral-400);
    }
    &__follower_count {
      padding-bottom: 1.5rem;
      border-bottom: 1px var(--text-neutral-100) solid;
      margin-bottom: 1rem;
    }
  }

  .theme_switcher {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__toggle {
      width: 3rem;
      background: var(--toggle);
      border: none;
      height: 1.6rem;
      border-radius: 1.5rem;
      position: relative;
      padding: 0;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
      &::after {
        content: '';
        width: 1.2rem;
        height: 1.2rem;
        background-color: var(--background);
        display: block;
        border-radius: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: calc(3rem - 1.2rem - .2rem); 
        margin: auto 0;        
        transition: all .2s ease;
      }
    }
  }
  
  .toggle--on::after {
    left: .2rem;
    transition: all .2s ease;
  } 

  @include breakpoint() {
    .header {
      position: relative;
      padding-bottom: 7rem;
      &__title {
        font-size: 1.7rem;
      }
      &__follower_count {
        border-bottom: none;
        margin-bottom: 2.5rem;
        padding-bottom: 0;
      }
    }

    .theme_switcher {
      position: absolute;
      right: 0;
      gap: .5rem;
      top: 0;
      bottom: 0;
    }

    .wrapper {
      max-width: 1100px;
      margin: auto;
      position: relative;
    }
  }
</style>