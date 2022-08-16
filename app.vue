<script setup>
  const { data } = await useAsyncData('users', () => queryContent('/').find())
  
  useHead({
  title: 'Social Media Dashboard',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'A social media dashboard with theme switcher.' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-iconhref', href: '/favicon-32x32.png' }
  ]
})

  const theme = useTheme()
</script>

<template>
  <div class="app" :class="theme ? 'app--dark' : ''">
    <Header />
    <main class="main">
      <div class="follower_container">
        <LargeCard class="follower_container__large_card" v-for="card in data[0].largeCards" :social="card.social" :handle="card.handle" :count="card.count" :type="card.type" :daily-count="card.dailyCount" :trend="card.trend" />
      </div>
      <div class="daily_stats_container">
        <h2 class="daily_stats_container__title">Overview - Today</h2>
        <SmallCard class="daily_stats_container__small_card" v-for="card in data[0].smallCards" :title="card.title" :social="card.social" :count="card.count" :trend="card.trend" :percentage="card.percentage" />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
  .app {
    background: var(--background);
    margin-bottom: -3rem;
  }

  .main {
    margin-top: -3rem;
  }

  .follower_container, .daily_stats_container {
    padding: 0 1.5rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  .daily_stats_container {
    padding-bottom: 2rem;
  }

  .daily_stats_container__title {
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
    color: var(--text-neutral-100);
    margin-bottom: .5rem;
  }
</style>
