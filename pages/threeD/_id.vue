<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12" lg="10" xl="8">
        <!-- Back -->
        <div v-if="crumbs.length != 0">
          <v-btn text color="black" @click="$router.back()"> back </v-btn>
        </div>
      </v-col>
      <!-- IMG & 3D -->
      <v-col cols="12">
        <v-row>
          <!-- Image & 3D Object Section -->
          <v-col
            :cols="colLeft"
            :md="mdLeft"
            :lg="lgLeft"
            :xl="xlLeft"
            align="center"
          >
            <!-- 3D Object -->
            <!-- Note: Size is set in component vuetify can't override -->
            <LoadThreeD
              v-if="show"
              :key="componentKey"
              class="grey lighten-4"
            />
            <!-- Image -->
            <div v-if="!show">
              <v-img :src="thisObject.info[0].img" contain :height="containerH">
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      role="progressbar"
                      indeterminate
                      color="primary"
                    />
                  </v-row>
                </template>
              </v-img>
            </div>
            <v-row class="mt-1">
              <v-col cols="4">
                <!-- Toggle 3D Model -->
                <v-btn color="primary" class="ma-1" @click="show = !show">
                  <v-icon class="mr-2"
                    >mdi-{{ show ? 'image' : 'cube-scan' }}</v-icon
                  >
                  {{ show ? 'Load Image' : 'Load 3D Model' }}
                </v-btn>
              </v-col>
              <v-col cols="8" class="d-flex">
                <!-- Toggle Theatre view -->
                <!-- Note: btn is based on condition viewportWatcher -->
                <v-btn
                  color="blue"
                  class="ma-1 d-none d-md-flex"
                  outlined
                  @click="
                    viewportWatcher < 9
                      ? toggleColSize(12, 12)
                      : toggleColSize(leftViewport, rightViewport)
                  "
                >
                  <!-- {{ viewportWatcher < 9? "Theatre View" : "Default" }} -->
                  <v-icon class="mx-1">
                    {{
                      viewportWatcher > 9 ? ' mdi-fullscreen' : 'mdi-overscan'
                    }}
                  </v-icon>
                  {{ viewportWatcher > 9 ? 'Default' : 'Overscan' }}
                </v-btn>
                <v-btn
                  v-if="show"
                  text
                  class="red--text ma-1"
                  @click="reload()"
                >
                  Error ?
                </v-btn>
              </v-col>
            </v-row>
            <br />
            <!-- ADD XS & XL Directions -->
            <v-row v-if="show">
              <v-col cols="12" align="start">
                <!-- SM-XL Directions -->
                <p id="hF" class="text-h5 my-0 d-none d-sm-flex">
                  How to use 3D controls:
                </p>
                <p id="bF" class="my-0 d-none d-sm-flex">
                  - Hold right click on your mouse to control "Rotation"
                </p>
                <p id="bF" class="my-0 d-none d-sm-flex">
                  - Hold Shift + Right Click to Control "Panning"
                </p>
                <p id="bF" class="my-0 d-none d-sm-flex">
                  - Scroll your mouse wheel to control "Zoom"
                </p>
                <p id="bF" class="my-0 d-none d-sm-flex">
                  - If Model isn't in view click "ERROR?"
                </p>
                <!-- XS Directions -->
                <p id="hF" class="text-h5 my-0 d-flex d-sm-none">
                  How to use 3D controls:
                </p>
                <p id="bF" class="my-0 d-flex d-sm-none">
                  - Press finger on screen & move slightly in any direction for
                  "Rotation"
                </p>
                <p id="bF" class="my-0 d-flex d-sm-none">
                  - Press two fingers on screen & move slightly in any direction
                  for "Panning"
                </p>
                <p id="bF" class="my-0 d-flex d-sm-none">
                  - Press two fingers on screen & pitch or out to "Zoom"
                </p>
                <p id="bF" class="my-0 d-flex d-sm-none">
                  - If Model isn't in view click "ERROR?"
                </p>
              </v-col>
            </v-row>
          </v-col>
          <!-- Product Desc Section -->
          <v-col :cols="colRight" :md="mdRight" :lg="lgRight" :xl="xlRight">
            <v-card class="pa-4 transparent" elevation="0" flat>
              <p id="bF" class="text-h5">
                {{ thisObject.name }} & {{ thisObject.type }}
              </p>
              <p id="bF">
                {{ thisObject.info[0].desc }}
              </p>
              <v-row>
                <v-col cols="12" align="start" class="pt-0">
                  <v-btn
                    id="bF"
                    class="ma-1"
                    outlined
                    color="secondary"
                    to="/ContactUs"
                    rel="next"
                  >
                    Contact us
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!-- Spacer -->
      <v-col cols="12">
        <v-spacer class="pa-4 ma-4" />
      </v-col>
      <!-- Profile -->
      <v-col cols="12" md="6">
        <!-- Chips -->
        <v-chip
          v-for="(skill, index) in thisObject.info[1].skills"
          id="bF"
          :key="`asset_index_${index}`"
          outlined
          class="ma-1"
          color="primary"
          :ripple="false"
        >
          {{ skill.skillName }}
        </v-chip>
      </v-col>
      <v-col cols="12">
        <v-spacer class="pa-4 ma-4" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Item',
  components: {},
  data() {
    return {
      // Check
      show: false,
      componentKey: 0,
    }
  },
  // Vue Meta
  head() {
    return {
      // sets tab name
      titleTemplate: `%s - Product - ${this.thisObject.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Have any questions about our products don't hesitate to view our resources page or get in contact with a representative using our contact form.",
        },
      ],
    }
  },
  computed: {
    ...mapState({
      projectsArray: (state) => state.ThreeD.projectsArray,
      // Image & 3D Section
      colLeft: (state) => state.ThreeD.colLeft,
      mdLeft: (state) => state.ThreeD.mdLeft,
      lgLeft: (state) => state.ThreeD.lgLeft,
      xlLeft: (state) => state.ThreeD.xlLeft,
      // Lorem Section
      colRight: (state) => state.ThreeD.colRight,
      mdRight: (state) => state.ThreeD.mdRight,
      lgRight: (state) => state.ThreeD.lgRight,
      xlRight: (state) => state.ThreeD.xlRight,
      // containerW standard values
      mdCanvasWidth: (state) => state.ThreeD.mdCanvasWidth,
      lgCanvasWidth: (state) => state.ThreeD.lgCanvasWidth,
      xlCanvasWidth: (state) => state.ThreeD.xlCanvasWidth,
      // containerH standard values
      mdCanvasHeight: (state) => state.ThreeD.mdCanvasHeight,
      lgCanvasHeight: (state) => state.ThreeD.lgCanvasHeight,
      xlCanvasHeight: (state) => state.ThreeD.xlCanvasHeight,
    }),
    // Return relevant object for use in front end
    thisObject() {
      // return this.projectsArray[this.findObjectKey]
      return this.projectsArray.find((v) => v.id === this.$route.params.id)
    },
    // Dynamic Bread Crumbs Links - For Back
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.substring(1).split('/')
      params.pop()
      const crumbs = []
      let path = ''

      params.forEach((param, index, { length }) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== 'index') {
          if (index === length - 1) {
            crumbs.push({
              text: path.replace(/\//g, '-').slice(1),
              disabled: true,
            })
          } else {
            crumbs.push({
              text: path.replace(/\//g, '-').slice(1),
              disabled: false,
              href: path + '/',
            })
          }
        }
      })

      return crumbs
    },
    // breakpoint based class
    relatedFilesC() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return ''
        case 'sm':
          return ''
        case 'md':
          return 'borderLeft px-8'
        case 'lg':
          return 'borderLeft px-8'
        case 'xl':
          return 'borderLeft px-8'
        default:
          return ''
      }
    },
    // watches col values for changes & returns current value
    viewportWatcher() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return this.colLeft
        case 'sm':
          return this.colLeft
        case 'md':
          return this.mdLeft
        case 'lg':
          return this.lgLeft
        case 'xl':
          return this.xlLeft
        default:
          return 12
      }
    },
    // Img Height based on viewport
    containerH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 320
        case 'sm':
          return 325
        case 'md':
          return 350
        case 'lg':
          return 375
        case 'xl':
          return 400
        default:
          return 350
      }
    },
    // Resets left col to original values
    leftViewport() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 12
        case 'sm':
          return 12
        case 'md':
          return 8
        case 'lg':
          return 8
        case 'xl':
          return 8
        default:
          return 4
      }
    },
    // Resets right col to original values
    rightViewport() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 12
        case 'sm':
          return 12
        case 'md':
          return 4
        case 'lg':
          return 4
        case 'xl':
          return 4
        default:
          return 4
      }
    },
    // Value grabbing for updating canvas.width size
    canvasViewportSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'md':
          return 800
        case 'lg':
          return 1000
        case 'xl':
          return 1200
        default:
          return 500
      }
    },
    // Canvas size.width defaults
    canvasViewportDefault() {
      switch (this.$vuetify.breakpoint.name) {
        case 'md':
          return 500
        case 'lg':
          return 575
        case 'xl':
          return 750
        default:
          return 500
      }
    },
    // resize textLogo
    textLogoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 40
        case 'sm':
          return 40
        case 'md':
          return 40
        case 'lg':
          return 60
        case 'xl':
          return 60
        default:
          return 40
      }
    },
  },
  methods: {
    ...mapActions({
      // Object Load
      updateValue: 'ThreeD/updateValue',
      updateCanvasValue: 'ThreeD/updateCanvasValue',
    }),
    // Changes Current Route ID, which changes _id.vue param adding clicked location
    goToNextId(id) {
      const routeName = id
      return routeName
    },
    /* Goal, create a theatre view for the 3d viewer that can adjust both the columns and
    in ObjectLoad change the size.width, then click on default
    view to return to previous column values bases on viewport & last size.width
    back to previous values. Lastly this function has to be re-usable for each breakpoint
    Achieved btw */

    toggleColSize(left, right) {
      // Current Page breakpoint aka xs,sm,md,lg & xl
      const res = this.$vuetify.breakpoint.name

      // Payload is left & right new value, left & right breakpoint col name in state
      const leftViewName = res + 'Left'
      const rightViewName = res + 'Right'
      const payload = {
        id1: left,
        id2: right,
        id3: leftViewName,
        id4: rightViewName,
      }

      // Update correct viewport col & param of payload arr
      this.updateValue(payload)

      // Update canvas size
      // Note: if left is greater than 9 it's a theatre view else it's default
      if (left > 9) {
        this.toggleCanvasSize(this.canvasViewportSize)
      } else {
        this.toggleCanvasSize(this.canvasViewportDefault)
      }
    },
    toggleCanvasSize(updatedWidth) {
      // Current Page breakpoint aka xs,sm,md,lg & xl
      const res = this.$vuetify.breakpoint.name

      // Payload is new width value, canvas breakpoint name in state
      const canvasRESName = res + 'CanvasWidth'
      const payload = { id1: updatedWidth, id2: canvasRESName }

      // Update correct viewport name & param of payload arr
      this.updateCanvasValue(payload)

      // Force ObjectLoad to re-render causing the canvas to check the changed state values
      this.forceRerender()
    },

    reload() {
      this.forceRerender()
    },

    // Force Re-render of component
    forceRerender() {
      this.componentKey += 1
    },
  },
}
</script>

<style>
.insetcard {
  box-shadow: inset 0px 4px 2px rgba(0, 0, 0, 0.25) !important;
}
.borderLeft px-8 {
  border-left: 2px solid #00346a !important;
}
</style>
