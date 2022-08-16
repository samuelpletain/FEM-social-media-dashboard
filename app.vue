<script setup>
  const { data } = await useAsyncData('users', () => queryContent('/').find())
</script>

<template>
  <div id="app">
    <Header />
    <main class="main">
      <div class="follower_container">
        <LargeCard class="follower_container__large_card" v-for="item in data[0].body" :social="item.social" :handle="item.handle" :count="item.count" :type="item.type" :daily-count="item.dailyCount" :trend="item.trend" />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
  .follower_container {
    padding: 0 1.5rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }

  .main {
    top: -3rem;
    position: relative;
  }
</style>
