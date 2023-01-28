<template>
  <v-app dark>
    <v-container>
      <v-row>
        <v-col cols="12" align="center">
          <v-card max-width="500" class="mt-16 pa-2 rounded-lg" elevation="2">
            <v-row v-if="error.statusCode === 404">
              <v-img
                :height="cardH"
                :width="cardW"
                contain
                src="https://ik.imagekit.io/STBS/CUSA_Project/Resources/Oops__404_Error_with_a_broken_robot-bro_6pacwrcIo.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670359873191"
                alt=""
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="primary" />
                  </v-row>
                </template>
              </v-img>
            </v-row>
            <v-row v-else>
              <v-img
                :height="cardH"
                :width="cardW"
                contain
                src="https://ik.imagekit.io/STBS/CUSA_Project/Resources/Computer_troubleshooting-pana_JjzKLzk3a.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1670360622618"
                alt=""
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="primary" />
                  </v-row>
                </template>
              </v-img>
            </v-row>
            <h1 v-if="error.statusCode === 404">
              {{ pageNotFound }}
            </h1>
            <v-card v-else elevation="0" flat>
              <h1>{{ otherError }}</h1>
              <p>*If button below doesn't work refresh this page*</p>
            </v-card>
            <NuxtLink to="/">
              <v-btn color="blue" class="white--text my-4" outlined>
                Home page
              </v-btn>
            </NuxtLink>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  computed: {
    cardW() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 360
        case 'md':
          return 380
        case 'lg':
          return 400
        case 'xl':
          return 420
        default:
          return 360
      }
    },
    cardH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 400
        case 'sm':
          return 440
        case 'md':
          return 460
        case 'lg':
          return 480
        case 'xl':
          return 500
        default:
          return 440
      }
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
