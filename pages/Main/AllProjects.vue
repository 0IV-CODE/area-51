<template>
  <v-row class="mx-0 px-0">
    <!-- App Bar -->
    <v-col cols="12">
      <v-app-bar absolute color="black">
        <h1
          id="hF"
          class="secondary--text text-h5 text-lg-h4 mt-3 d-none d-sm-flex"
        >
          Projects
        </h1>
        <v-spacer />

        <!-- Search -->
        <v-expand-transition>
          <v-toolbar elevation="0" color="transparent">
            <p id="bF" class="white--text mt-3 mx-4 d-none d-md-flex">
              Components Search:
            </p>
            <v-autocomplete
              v-model="model"
              :items="items"
              :loading="isLoading"
              :search-input.sync="search"
              color="white"
              clearable
              hide-no-data
              hide-details
              hide-selected
              item-text="name"
              item-value="name"
              label="Search Here"
              solo
              rounded
              return-object
            >
              <!-- link on click -->
              <template #item="{ item }">
                <v-list-item
                  id="bF"
                  link
                  class="black--text"
                  :to="goTo(item.id)"
                >
                  {{ item.name }}
                </v-list-item>
              </template>
            </v-autocomplete>
          </v-toolbar>
        </v-expand-transition>

        <!-- Filter View XS -->
        <v-speed-dial
          v-model="fab"
          :transition="transition"
          direction="bottom"
          class="d-flex d-md-none mr-4"
        >
          <!-- BTN for Options -->
          <template #activator>
            <v-btn v-model="fab" color="white" dark text fab>
              <v-icon v-if="fab"> mdi-close </v-icon>
              <v-icon v-else> mdi-dots-vertical </v-icon>
            </v-btn>
          </template>
          <!-- View Sorting Options -->
          <v-btn fab color="secondary" @click="toggleClass(12)">
            <v-icon class="white--text"> mdi-view-list-outline </v-icon>
          </v-btn>
          <v-btn fab color="secondary" @click="toggleClass(6)">
            <v-icon class="white--text"> mdi-view-grid-outline </v-icon>
          </v-btn>
          <v-btn
            fab
            color="secondary"
            class="d-none d-sm-flex"
            @click="toggleClass(4)"
          >
            <v-icon class="white--text"> mdi-grid </v-icon>
          </v-btn>
        </v-speed-dial>
        <!-- SM+ -->
        <!-- View Sorting Options -->
        <v-row>
          <v-col cols="12" class="d-none d-md-flex">
            <p id="bF" class="white--text mt-3">Adjust View:</p>
            <v-btn fab icon @click="toggleClass(12)">
              <v-icon class="white--text"> mdi-view-list-outline </v-icon>
            </v-btn>
            <v-btn fab icon @click="toggleClass(6)">
              <v-icon class="white--text"> mdi-view-grid-outline </v-icon>
            </v-btn>
            <v-btn fab icon @click="toggleClass(4)">
              <v-icon class="white--text"> mdi-grid </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-app-bar>
    </v-col>
    <!-- spacer -->
    <v-col cols="12">
      <v-spacer class="pa-1" />
    </v-col>
    <v-col col="0" md="1" lg="2" xl="3" class="d-none d-md-flex" />
    <v-col cols="12" md="10" lg="8" xl="6">
      <v-row>
        <!-- Filtering Chips -->
        <v-col cols="12" class="px-0 mt-4">
          <v-tabs v-model="tab" center-active color="white" show-arrows>
            <!-- All Items Tab -->
            <v-tab href="#All">
              <v-chip id="bF" class="ma-2 black--text"> All </v-chip>
            </v-tab>
            <!-- Looped Items Type Tabs -->
            <v-tab
              v-for="(project, index) in fieldsTwo()"
              :key="`${index}`"
              :href="`#${project.type}`"
            >
              <v-chip class="ma-1 black--text">
                {{ project.type }}
              </v-chip>
            </v-tab>
          </v-tabs>
        </v-col>
        <!-- Type Filter -->
        <v-col cols="12">
          <v-tabs-items v-model="tab" class="transparent">
            <!-- All Items in Inventory -->
            <v-tab-item value="All">
              <v-row>
                <v-col cols="12" align="center">
                  <p id="hF" class="text-h5">All projects</p>
                </v-col>
                <v-col
                  v-for="(project, index) in projectsArray"
                  :key="`asset_index_${index}`"
                  :cols="breakpointValue"
                  class="px-1 px-sm-4"
                >
                  <!-- Location Card - 3 Cards Row -->

                  <v-card class="black ma-4" height="2" flat>
                    <NuxtLink rel="search" :to="goTo(project.id)">
                      <v-img
                        v-if="invtGrid === 4"
                        class="mouse align-end"
                        :src="project.info[0].img"
                        contain
                        link
                        @click="goTo(project.key, project.name)"
                      >
                        <div class="ma-2 transWhite pt-2" style="height: 100%">
                          <p>{{ project.name }}</p>
                        </div>
                        <template #placeholder>
                          <v-sheet
                            color="grey lighten-4"
                            class="fill-height mt-8"
                          >
                            <v-skeleton-loader
                              v-bind="attrs"
                              class="mx-auto grey lighten-4"
                              type="image"
                            />
                          </v-sheet>
                        </template>
                      </v-img>
                    </NuxtLink>
                  </v-card>

                  <!-- Location Card 2 Cards Row -->
                  <NuxtLink rel="search" :to="goTo(project.id)">
                    <v-img
                      v-if="invtGrid === 6"
                      class="mouse align-end"
                      height="400"
                      :src="project.info[0].img"
                      contain
                      link
                      @click="goTo(project.key, project.name)"
                    >
                      <div class="ma-2 transWhite pt-2" style="height: 100%">
                        <p>{{ project.name }}</p>
                      </div>
                      <template #placeholder>
                        <v-sheet
                          color="grey lighten-4"
                          class="fill-height mt-8"
                        >
                          <v-skeleton-loader
                            v-bind="attrs"
                            class="mx-auto grey lighten-4"
                            type="image"
                          />
                        </v-sheet>
                      </template>
                    </v-img>
                  </NuxtLink>
                  <!-- Location Card 1 Cards Row -->
                  <NuxtLink rel="search" :to="goTo(project.id)">
                    <v-img
                      v-if="invtGrid === 12"
                      class="mouse align-end"
                      height="400"
                      :src="project.info[0].img"
                      contain
                      link
                      @click="goTo(project.key, project.name)"
                    >
                      <div class="ma-2 transWhite pt-2" style="height: 100%">
                        <p>{{ project.name }}</p>
                      </div>
                    </v-img>
                    <template #placeholder>
                      <v-sheet color="grey lighten-4" class="fill-height mt-8">
                        <v-skeleton-loader
                          v-bind="attrs"
                          class="mx-auto grey lighten-4"
                          type="image"
                        />
                      </v-sheet>
                    </template>
                  </NuxtLink>
                </v-col>
              </v-row>
            </v-tab-item>
            <!-- Items Loop for per category tab item in Inventory -->
            <v-tab-item
              v-for="(projectType, index) in fieldsTwo()"
              :key="`${index}`"
              :value="projectType.type"
            >
              <v-row>
                <!-- Tab Header -->
                <v-col cols="12" align="center">
                  <p id="hF" class="text-h5">
                    {{ projectType.type }}
                  </p>
                </v-col>
                <!-- myTypeCheck checks my type is same as passed type being looped pm tab-item -->
                <v-col
                  v-for="(project, i) in myTypeCheck(projectType.type)"
                  :key="`asset_index_${i}`"
                  :cols="breakpointValue"
                  class="px-1 px-sm-4"
                >
                  <!-- Location Card - 3 Cards Row -->
                  <v-card class="black ma-4" height="2" flat>
                    <NuxtLink rel="search" :to="goTo(project.id)">
                      <v-img
                        v-if="invtGrid === 4"
                        class="mouse align-end"
                        :src="project.info[0].img"
                        contain
                        link
                        @click="goTo(project.key, project.name)"
                      >
                        <div class="ma-2 transWhite pt-2" style="height: 100%">
                          <p>{{ project.name }}</p>
                        </div>

                        <template #placeholder>
                          <v-sheet
                            color="grey lighten-4"
                            class="fill-height mt-8"
                          >
                            <v-skeleton-loader
                              v-bind="attrs"
                              class="mx-auto grey lighten-4"
                              type="image"
                            />
                          </v-sheet>
                        </template>
                      </v-img>
                    </NuxtLink>
                  </v-card>

                  <!-- Location Card 2 Cards Row -->

                  <NuxtLink rel="search" :to="goTo(project.id)">
                    <v-img
                      v-if="invtGrid === 6"
                      class="mouse align-end"
                      height="400"
                      :src="project.info[0].img"
                      contain
                      link
                      @click="goTo(project.key, project.name)"
                    >
                      <div class="ma-2 transWhite pt-2" style="height: 100%">
                        <p>{{ project.name }}</p>
                      </div>

                      <template #placeholder>
                        <v-sheet
                          color="grey lighten-4"
                          class="fill-height mt-8"
                        >
                          <v-skeleton-loader
                            v-bind="attrs"
                            class="mx-auto grey lighten-4"
                            type="image"
                          />
                        </v-sheet>
                      </template>
                    </v-img>
                  </NuxtLink>
                  <!-- Location Card 1 Cards Row -->
                  <NuxtLink rel="search" :to="goTo(project.id)">
                    <v-img
                      v-if="invtGrid === 12"
                      class="mouse align-end"
                      height="400"
                      :src="project.info[0].img"
                      contain
                      link
                      @click="goTo(project.key, project.name)"
                    >
                      <div class="ma-2 transWhite pt-2" style="height: 100%">
                        <p>{{ project.name }}</p>
                      </div>

                      <template #placeholder>
                        <v-sheet
                          color="grey lighten-4"
                          class="fill-height mt-8"
                        >
                          <v-skeleton-loader
                            v-bind="attrs"
                            class="mx-auto grey lighten-4"
                            type="image"
                          />
                        </v-sheet>
                      </template>
                    </v-img>
                  </NuxtLink>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
          <v-spacer class="pa-4 ma-4" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// AOS - Animation Library Import
import aosMixin from '~/mixins/aos'

export default {
  name: 'Locations',
  // AOS Usage
  mixins: [aosMixin],
  data() {
    return {
      // Searching
      descriptionLimit: 110,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
      // tabs
      // tab: null,
      // inventory grid change
      invtGrid: 12,
      gridCol: 12,
      // Total invt items per pagination pg
      pageSize: 12,
      pageNo: 1,
      // Filter View
      transition: 'slide-y-transition',
      fab: false,
      // Breakpoint Service Vars
      xs: 12,
      sm: 12,
      md: 6,
      lg: 6,
      xl: 4,
      // Skeleton Loader
      attrs: {
        boilerplate: false,
        elevation: 2,
        transition: 'fade-transition',
      },
    }
  },
  // Vue Meta
  head() {
    return {
      // %s is title
      titleTemplate: '%s - Projects',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Review our Projects and see for yourself what is possible.',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      projectsArray: (state) => state.ThreeD.projectsArray,
    }),
    // Search
    fields() {
      if (!this.model) {
        return []
      }
      const fields = []

      const qa = {
        name: this.model.name,
        key: this.model.key,
      }
      fields.push(qa)
      return fields
    },
    items() {
      return this.entries.map((entry) => {
        const name =
          entry.name.length > this.descriptionLimit
            ? entry.name.slice(0, this.descriptionLimit) + '...'
            : entry.name
        return Object.assign({}, entry, { name })
      })
    },
    // Linking to a Specific Tab in Vuetify.js
    // https://jareklipski.medium.com/linking-to-a-specific-tab-in-vuetify-js-d978525f2e1a
    tab: {
      set(tab) {
        this.$router.replace({ query: { ...this.$route.query, tab } })
      },
      get() {
        return this.$route.query.tab
      },
    },
    // Breakpoint Service
    breakpointValue() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return this.xs
        case 'sm':
          return this.sm
        case 'md':
          return this.md
        case 'lg':
          return this.lg
        case 'xl':
          return this.xl
        default:
          return 12
      }
    },
    // breakpoint based class for textLogo Height
    textLogoHeightRow() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '20'
        case 'sm':
          return '30'
        case 'md':
          return '40'
        case 'lg':
          return '40'
        case 'xl':
          return '40'
        default:
          return ''
      }
    },
  },
  watch: {
    search() {
      // Items have already been loaded
      if (this.items.length > 0) {
        return
      }
      // Items have already been requested
      if (this.isLoading) {
        return
      }
      this.isLoading = true
      // Lazily load input items
      this.entries = this.projectsArray
      this.isLoading = false
    },
  },
  methods: {
    ...mapActions({}),
    qa(key) {
      return this.projectsArray.filter((item) => item.key === key)
    },
    // goTo function is passed params from btn for looped component
    // Note: will need to find object by a key or unique string or number
    goTo(id) {
      const routeName = '../threeD/' + id
      return routeName
    },
    fieldsTwo() {
      // store the unique object IDs
      const uniqueIds = []
      // filter the array of objects
      const unique = this.projectsArray.filter((element) => {
        const isDuplicate = uniqueIds.includes(element.type)

        // Only include objects with unique IDs in the new array
        if (!isDuplicate) {
          uniqueIds.push(element.type)

          return true
        }

        return false
      })

      return unique
    },
    // toggleClass for toggling view
    toggleClass(value) {
      // Current Page breakpoint
      const res = this.$vuetify.breakpoint.name

      /*
      1.grab current breakpoint name & change
      breakpointValue that sets the initial value
      by changing variables in data
      2. breakpointValue re-sets value when breakpoint changes
      */
      switch (res) {
        case 'xs':
          this.xs = value
          break
        case 'sm':
          this.sm = value
          break
        case 'md':
          this.md = value
          break
        case 'lg':
          this.lg = value
          break
        case 'xl':
          this.xl = value
          break
        default:
          // console.log('method: toggleClass Error')
          break
      }
    },
    // Categories Filter Option for Filter btn
    myTypeCheck(myType) {
      return this.projectsArray.filter(
        (projectsArray) => projectsArray.type === myType
      )
    },
  },
}
</script>

<style>
/* Hover Mouse CSS */
.mouse {
  cursor: pointer !important;
}
/* Links */
.v-application a {
  color: inherit !important;
  text-decoration: none !important;
}
/* Filter View */
#create .v-btn--floating {
  position: relative;
}
.transWhite {
  background-color: rgba(255, 255, 255, 0.25) !important;
}
</style>
