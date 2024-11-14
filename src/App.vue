<script setup>
import Head from './components/Head.vue'
import RegistersInfoBar from './components/LoadItems.vue'
</script>

<template>
  <header class="head">
    <div class="wrapper">
      <Head msg="Authorization" />
    </div>
  </header>

  <main>
    <RegistersInfoBar :register-items="registerItems" />
    <RouterView />
  </main>
</template>

<script>
export default {
  data() {
    return {
      registerItems: [] // массив для данных из таблицы register
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .head {
    height: 80px;
    width: 60vw;
  }
}
</style>
