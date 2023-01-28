<template>
  <v-row class="mx-0 px-0">
    <v-col cols="0" lg="1" xl="2" class="pa-0" />
    <v-col cols="12" lg="10" xl="8">
      <h1 class="text-h1"><b>AREA-51</b></h1>
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
    return {
      card01: true,
      model: 0,
      carouselImgs: [
        {
          id: 0,
          src: 'https://ik.imagekit.io/STBS/CUSA_Project/IMGS/tr:q-50/Red_Silver_Blue_PBR_7_hkbbMY8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666294764140',
          alt: 'Three Colored layered Panels',
        },
      ],
    }
  },
  computed: {
    ...mapState({}),
    introImageH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 400
        case 'sm':
          return 450
        case 'md':
          return 500
        case 'lg':
          return 525
        case 'xl':
          return 600
        default:
          return 600
      }
    },
    introPassage() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 320
        case 'sm':
          return 600
        case 'md':
          return 800
        case 'lg':
          return 800
        case 'xl':
          return 800
        default:
          return 600
      }
    },
    actionTwoIH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 200
        case 'sm':
          return 300
        case 'md':
          return 400
        case 'lg':
          return 300
        case 'xl':
          return 300
        default:
          return 300
      }
    },
    accreditedIH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 250
        case 'sm':
          return 360
        case 'md':
          return 360
        case 'lg':
          return 400
        case 'xl':
          return 460
        default:
          return 300
      }
    },
    iasImgH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 100
        case 'sm':
          return 100
        case 'md':
          return 100
        case 'lg':
          return 125
        case 'xl':
          return 125
        default:
          return 100
      }
    },
    accreditedCSS() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'black--text'
        case 'sm':
          return 'black--text'
        case 'md':
          return 'borderLeft mt-9'
        case 'lg':
          return 'borderLeft mt-12'
        case 'xl':
          return 'borderLeft mt-15'
        default:
          return 'borderLeft mt-15'
      }
    },
    hrIH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 0
        case 'sm':
          return 0
        case 'md':
          return 300
        case 'lg':
          return 360
        case 'xl':
          return 420
        default:
          return 300
      }
    },
    hrIW() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 0
        case 'sm':
          return 0
        case 'md':
          return 460
        case 'lg':
          return 560
        case 'xl':
          return 660
        default:
          return 460
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
