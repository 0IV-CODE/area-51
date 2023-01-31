<template>
  <v-row>
    <v-col cols="12">
      <!-- Model Importer Progress -->
      <v-card :width="containerW" flat elevation="0" class="transparent">
        <v-progress-linear
          v-if="progress"
          color="grey lighten-1"
          :value="progressValue"
          :buffer-value="bufferValue"
          rounded
          height="20"
          stream
        >
          <template #default="{ value }">
            <strong class="accent--text">{{ Math.ceil(value) }}%</strong>
          </template>
        </v-progress-linear>
        <v-card v-else height="20" flat elevation="0" class="transparent" />
      </v-card>

      <!-- Model -->
      <div ref="container" />
      <!-- State Watcher -->
    </v-col>
  </v-row>
</template>

<script language="JavaScript">
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import { mapState } from 'vuex'

export default {
  name: 'LoadThreeD',
  data() {
    return {
      // Three.js Vars
      camera: null,
      scene: null,
      renderer: null,
      pointLight1: null,
      pointLight2: null,
      pointLight3: null,
      pointLight4: null,
      loader: null,
      hemiLight: null,
      light: null,
      size: null,
      loadingManager: null,
      progressValue: 0,
      bufferValue: 0,
      progress: true,
    }
  },
  computed: {
    ...mapState({
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
      // DB
      projectsArray: (state) => state.ThreeD.projectsArray,
    }),
    // watches col values for changes
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
    // sizes.width for canvas
    containerW() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 305
        case 'sm':
          return window.innerWidth
        case 'md':
          return this.mdCanvasWidth
        case 'lg':
          return this.lgCanvasWidth
        case 'xl':
          return this.xlCanvasWidth
        default:
          return 600
      }
    },
    // sizes.height for canvas
    containerH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 320
        case 'sm':
          return 400
        case 'md':
          return this.mdCanvasHeight
        case 'lg':
          return this.lgCanvasHeight
        case 'xl':
          return this.xlCanvasHeight
        default:
          return 600
      }
    },
  },

  mounted() {
    // Canvas
    const container = this.$refs.container

    // Object ID
    const objectId = this.projectsArray.find(
      (v) => v.id === this.$route.params.id
    )

    // ADD SCENE
    // Note: hdri texture doesn't load in xs, so added lights as backup
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x000000)

    // ADD LIGHT TO SCENE
    // Light 1 - White
    this.pointLight1 = new THREE.PointLight(0xffffff, 1)
    this.pointLight1.position.set(-1.86, 1, -1.65)
    this.pointLight1.intensity = 200
    this.scene.add(this.pointLight1)

    // Light 2 - white
    this.pointLight2 = new THREE.PointLight(0xffffff, 2)
    this.pointLight2.position.set(2.13, -3, -1.98)
    this.pointLight2.intensity = 300
    this.scene.add(this.pointLight2)

    // Light 3 - White
    this.pointLight3 = new THREE.PointLight(0xffffff, 1)
    this.pointLight3.position.set(0, 0, 4)
    this.pointLight3.intensity = 100
    this.scene.add(this.pointLight3)

    // Light 4 - White
    this.pointLight4 = new THREE.PointLight(0xffffff, 1)
    this.pointLight4.position.set(0, 3, 0)
    this.pointLight4.intensity = 25
    this.scene.add(this.pointLight4)

    // SET GRID HELPER
    const size = 5
    const divisions = 5
    this.gridHelper = new THREE.GridHelper(size, divisions)
    this.scene.add(this.gridHelper)

    // Sizes
    const sizes = {
      width: this.containerW,
      height: this.containerH,
    }

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = this.containerW
      sizes.height = this.containerH

      // Update camera
      this.camera.aspect = sizes.width / sizes.height
      this.camera.updateProjectionMatrix()

      // Update renderer
      this.renderer.setSize(sizes.width, sizes.height)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    // SET AND ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    )
    this.camera.position.set(0.36, 2.513, 1.162)

    // RENDER IN PAGE
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    })
    // Camera & Render Controls
    this.camera.aspect = this.containerW / this.containerH
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.containerW, this.containerH)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    // Realistic Lights
    this.renderer.physicallyCorrectLights = true
    // Texture Settings
    this.renderer.outputEncoding = THREE.sRGBEncoding
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.8
    // Render
    container.appendChild(this.renderer.domElement)

    // SET ORBIT CONTROLS
    const controls = (this.orbit_controls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    ))
    this.orbit_controls.addEventListener('change', () =>
      this.renderer.render(this.scene, this.camera)
    )
    controls.maxDistance = 4
    controls.minDistance = 0
    controls.enablePan = true

    // Model & Envi Loader
    const rgbeLoader = new RGBELoader()

    rgbeLoader.load(
      'https://ik.imagekit.io/STBS/CUSA_Project/Resources/Add-Ons/HDR/construction_yard_1k_OjrQhfvCf.hdr?ik-sdk-version=javascript-1.4.3&updatedAt=1673033627413',
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        // Shows Environmental Image
        // this.scene.background = texture
        // Reflects Environmental Image on Model
        this.scene.environment = texture
        this.scene.backgroundBlurriness = 0.01

        // // Instantiate a loader
        const loader = new GLTFLoader()

        // Model
        loader.load(
          // Direct: 'PBR-extrusion-glb-XThree.glb',
          objectId.info[0].obj,
          (glb) => {
            glb.scene.scale.set(1, 1, 1)
            this.scene.add(glb.scene)
          },
          (xhr) => {
            // console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
            const load = (xhr.loaded / xhr.total) * 100 - 10
            this.progressValue = load
            if (load === 90) {
              this.progressValue = this.progressValue + 10
              setTimeout(() => {
                this.progress = false
              }, 2000)
            }
          }
          //   // (error) => {
          //   //   // console.log(error)
          //   // }
        )
      }
    )

    // Animate
    // Note: Fixes Loading Issue
    const tick = () => {
      // Render
      this.renderer.render(this.scene, this.camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  },
  methods: {},
}
</script>
