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
      <h2 class="title">Overview - Today</h2>
      <div class="daily_stats_container">
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

  .title {
    padding: 1.5rem;
    font-size: 1.5rem;
    font-weight: $font-weight-bold;
    color: var(--text-neutral-400);
    margin-bottom: .5rem;
  }

  @include breakpoint {
    .app {
      min-height: 100vh;
      & > *:not(:first-child) {
        margin: auto;
        padding-left: 2rem;
        padding-right: 2rem;
        max-width: 1100px;
      }
    }

    .main {
      margin-top: -7rem !important;
      padding-bottom: 2rem;
    }

    .follower_container, .daily_stats_container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      padding: 0;
      column-gap: 2rem;
      row-gap: 1.5rem;
    }

    .daily_stats_container {
      margin-bottom: 0;
    }

    .title {
      grid-column: 1/5;
      padding-bottom: 0;
      padding: 0 0 1.5rem;
    }
  }
</style>
