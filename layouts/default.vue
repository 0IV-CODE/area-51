<template>
  <v-app>
    <!-- Top Bar -->
    <AppBar />
    <!-- Body -->
    <v-main>
      <Nuxt to="/fade" />
    </v-main>
    <!-- Footer -->
    <AppFooter />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',

  computed: {
    ...mapState({}),
  },
}
</script>

<style>
/* Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
