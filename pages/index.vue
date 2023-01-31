<template>
  <v-row class="mx-0 px-0">
    <v-col cols="0" lg="1" xl="2" class="pa-0" />
    <v-col cols="12" lg="10" xl="8">
      <v-row>
        <!-- Intro section -->
        <v-col cols="12">
          <v-row class="mt-8 flex-column-reverse flex-md-row">
            <!-- Copy -->
            <v-col cols="12" md="5">
              <v-card elevation="0" flat class="pa-2 pa-sm-8">
                <h1 class="text-h2 text-md-h1 mb-8"><b>AREA-51</b></h1>
                <p>The Future of IV-CODE</p>
                <p>
                  We believe that the future of IV-CODE lies with NUXT. We're
                  taking our product to the next level and making it easier than
                  ever to integrate AR, VR, and other technologies into your
                  projects!
                </p>
                <p class="d-none d-sm-flex">
                  We know you're excited about this new development, but don't
                  worry—we've got your back. You can still use IV-CODE in its
                  current form until we complete testing on our new platform.
                  Check back soon for more information!
                </p>
                <v-btn class="black white--text">View Projects</v-btn>
                <v-btn outlined class="black--text">About Me</v-btn>
              </v-card>
            </v-col>
            <!-- Drone IMG -->
            <v-col cols="12" md="7">
              <v-img
                contain
                :height="introImageH"
                class="mt-8"
                src="https://ik.imagekit.io/invimgs0101/Area-51/Main_Assets/drone-trans-02-cycles_OQPN5r2DT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674942059049"
              >
                <template #placeholder>
                  <v-sheet color="grey lighten-4" class="fill-height mt-8">
                    <v-skeleton-loader
                      class="mx-auto grey lighten-4"
                      type="image"
                    />
                  </v-sheet>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-col>
        <!-- Projects Section -->
        <v-col cols="12">
          <v-row>
            <!-- Projects Name & Cat -->
            <v-col cols="12">
              <p class="text-h3 text-sm-h2"><b>3D Projects</b></p>
            </v-col>
            <!-- Projects Cards -->
            <v-col
              v-for="(product, index) in projectsArray"
              :key="`asset_index_${index}`"
              :cols="projectCardsCol"
            >
              <v-card width="300" class="pa-4" elevation="4">
                <v-img
                  contain
                  :height="projectCardsImgH"
                  class="mt-8"
                  :src="product.info[0].img"
                >
                  <template #placeholder>
                    <v-sheet color="grey lighten-4" class="fill-height mt-8">
                      <v-skeleton-loader
                        class="mx-auto grey lighten-4"
                        type="image"
                      />
                    </v-sheet>
                  </template>
                </v-img>
                <v-card-actions style="border-top: 1px solid black">
                  <v-row>
                    <v-col cols="12" align="start">
                      <p>
                        <b>{{ product.info[0].name }}</b>
                      </p>
                      <!-- Connect -->
                      <v-btn
                        link
                        :to="product.info[0].summaryLink"
                        outlined
                        class="black--text"
                        >View</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
// VueX Import
import { mapState } from 'vuex'
// AOS - Animation Library Import
import aosMixin from '~/mixins/aos'

export default {
  name: 'IndexPage',
  // AOS Usage
  mixins: [aosMixin],
  // SEO
  data() {
    return {}
  },
  computed: {
    ...mapState({
      projectsArray: (state) => state.ThreeD.projectsArray,
    }),
    introImageH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 400
        case 'md':
          return 500
        case 'lg':
          return 600
        case 'xl':
          return 600
        default:
          return 400
      }
    },
    projectCardsCol() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 12
        case 'sm':
          return 6
        case 'md':
          return 3
        case 'lg':
          return 3
        case 'xl':
          return 3
        default:
          return 6
      }
    },
    projectCardsImgH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 100
        case 'sm':
          return 200
        case 'md':
          return 300
        case 'lg':
          return 400
        case 'xl':
          return 500
        default:
          return 200
      }
    },
  },

  mounted() {},
}
</script>

<style>
.backOpacity {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
.backOpacityBlue {
  background-color: #193e8480 !important;
}
.backOpacityRed {
  background-color: #ce162861 !important;
}
.borderLeft {
  border-left: 4px solid #00346a !important;
}
.borderLeftBlack {
  border-left: 4px solid #000000 !important;
}
</style>
