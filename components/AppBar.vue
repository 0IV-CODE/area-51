<template>
  <div>
    <!-- xs-xl Top Bar-->
    <v-app-bar fixed app color="black">
      <!-- Intro IMG -->
      <v-app-bar-nav-icon class="ml-2" nuxt link to="/">
        <v-avatar tile size="50">
          <img
            width="50"
            height="50"
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_WHITE_TQ9YPD0KD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848531"
            alt="CUSA logo"
          />
        </v-avatar>
      </v-app-bar-nav-icon>

      <v-spacer />
      <!-- Products Dropdown -->
      <v-toolbar-title class="white--text d-flex">
        <v-btn
          id="hF"
          nuxt
          to="/"
          text
          class="white--text text-subtitle-1 mx-md-4"
        >
          Home
        </v-btn>
        <!-- Products Sub-Menu Parent -->
        <v-menu
          v-model="menu"
          open-on-hover
          :nudge-width="75"
          transition="scroll-y-transition"
          offset-y
        >
          <template #activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              id="hF"
              rel="next"
              class="white--text text-subtitle-1 d-none d-md-flex"
              text
              v-on="on"
            >
              Projects
              <v-icon color="white"> mdi-dots-vertical </v-icon>
            </v-btn>
          </template>

          <v-card class="backgroundColorTopNav" align="center">
            <!-- Categories Sub-Menu -->
            <v-list nav dense color="transparent">
              <v-list-item
                v-for="item in pageItems.slice(0, 2)"
                :key="item.name"
                rel="next"
                :to="item.to"
                class="grey lighten-4 rounded-lg mx-2 my-2 primary--text"
                router
                exact
              >
                <v-list-item-content>
                  <!-- Adjust -->
                  <v-list-item-title
                    id="hF"
                    class="primary--text font-size-plus"
                  >
                    {{ item.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <!-- IN Menu -->
        <v-menu
          v-model="menuTwo"
          open-on-hover
          :nudge-width="75"
          transition="scroll-y-transition"
          offset-y
        >
          <template #activator="{ on, attrs }">
            <v-btn
              id="hF"
              class="white--text text-subtitle-1 d-none d-md-flex"
              text
              v-bind="attrs"
              v-on="on"
            >
              Info
              <v-icon color="white"> mdi-dots-vertical </v-icon>
            </v-btn>
          </template>
          <!-- Sub Menu -->
          <v-card class="backgroundColorTopNav" align="center">
            <v-list nav dense color="transparent">
              <v-list-item
                class="grey lighten-4 rounded-lg mx-2 my-2 primary--text"
                nuxt
                rel="next"
                to="/About"
              >
                <v-list-item-title id="hF" class="font-size-plus">
                  About
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                class="grey lighten-4 rounded-lg mx-2 my-2 primary--text"
                nuxt
                rel="next"
                to="/Main/ContactUs"
              >
                <v-list-item-title id="hF" class="font-size-plus">
                  Contact
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                class="grey lighten-4 rounded-lg mx-2 my-2 primary--text"
                nuxt
                rel="next"
                to="/Main/PrivacyPolicy"
              >
                <v-list-item-title id="hF" class="font-size-plus">
                  Privacy Policy
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-toolbar-title>

      <!-- Search - Page || Product md-xl -->
      <v-slide-x-transition>
        <v-col
          v-if="showbarMain"
          cols="0"
          md="3"
          xl="2"
          class="d-none d-md-flex"
        >
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
              <!-- Pages, Products, & Tabs -->
              <v-list-item
                v-if="item.id < 100"
                id="hF"
                link
                class="black--text"
                :to="goTo(item.id)"
                rel="next"
              >
                {{ item.name }}
              </v-list-item>
            </template>
          </v-autocomplete>
        </v-col>
      </v-slide-x-transition>
      <!-- search toggle btn md-xl -->
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            id="hF"
            icon
            class="d-none d-md-flex"
            v-on="on"
            @click="showBarSearchMainNav()"
          >
            <v-icon color="white">
              {{ showbarMain ? 'mdi-close' : 'mdi-magnify' }}
            </v-icon>
          </v-btn>
        </template>
        <span>{{ showbarMain ? 'Close' : 'Search' }}</span>
      </v-tooltip>
      <!-- search toggle btn xs-sm -->
      <v-dialog
        v-model="dialog"
        persistent
        fullscreen
        :scrollable="false"
        transition="scroll-y-transition"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            color="white"
            icon
            v-bind="attrs"
            class="d-flex d-md-none"
            v-on="on"
          >
            <small class="d-none">Contact</small>
            <v-icon> mdi-magnify </v-icon>
          </v-btn>
        </template>

        <v-card class="transparent">
          <v-card class="black mt-15 pa-2 mx-2">
            <v-row>
              <!-- close dialog -->
              <v-col cols="1">
                <v-btn color="white" class="mt-2" icon @click="dialog = false">
                  <v-icon color="red"> mdi-close </v-icon>
                </v-btn>
              </v-col>
              <!-- autocomplete -->
              <v-col cols="11">
                <v-autocomplete
                  v-model="model"
                  :items="items"
                  :loading="isLoading"
                  :search-input.sync="search"
                  color="black"
                  clearable
                  hide-no-data
                  hide-details
                  hide-selected
                  item-text="name"
                  item-value="name"
                  label="Search Here"
                  solo
                  class="mx-4"
                  return-object
                >
                  <!-- link on click -->
                  <template #item="{ item }">
                    <!-- Pages, Products, & Tabs -->
                    <v-list-item
                      v-if="item.id < 100"
                      id="hF"
                      link
                      class="black--text"
                      rel="next"
                      :to="goTo(item.id)"
                    >
                      {{ item.name }}
                    </v-list-item>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-dialog>

      <v-app-bar-nav-icon
        class="mx-2 mx-md-4 d-flex d-md-none"
        @click.stop="sideDrawer = !sideDrawer"
      >
        <v-icon size="35" color="white"> mdi-menu </v-icon>
      </v-app-bar-nav-icon>
      <v-tooltip bottom>
        <template #activator="{ on, attrs }">
          <v-app-bar-nav-icon
            v-bind="attrs"
            nuxt
            rel="next"
            to="/Main/ContactUs"
            class="mx-2 mx-md-4 d-none d-md-flex"
            v-on="on"
          >
            <!-- Invisible Anchor Text for SEO -->
            <small class="d-none">Contact</small>
            <v-icon size="35" color="white"> mdi-phone </v-icon>
          </v-app-bar-nav-icon>
        </template>
        <span id="hF">Contact</span>
      </v-tooltip>
    </v-app-bar>
    <!-- XS Nav bar-->
    <v-expand-x-transition>
      <v-navigation-drawer
        v-model="sideDrawer"
        mobile-breakpoint="0"
        fixed
        right
        temporary
        class="mt-14 backgroundColor"
      >
        <v-list>
          <!-- Projects Sub-Menu Parent -->
          <v-list-item
            class="grey lighten-4 rounded-lg mx-2 my-2 primary--text"
            @click="activateRevInner()"
          >
            <v-list-item-title id="hF"> Projects </v-list-item-title>
            <v-list-item-icon>
              <v-icon color="primary">
                {{ revInner ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
          <!-- Projects Sub-Menu -->
          <v-slide-x-reverse-transition>
            <v-col v-if="revInner" cols="12" align="center" class="pt-0">
              <v-list nav dense>
                <v-list-item
                  v-for="item in pageItems.slice(0, 2)"
                  :key="item.name"
                  :to="item.to"
                  class="grey lighten-4 rounded-lg mx-2 my-2 primary--text"
                  router
                  exact
                >
                  <v-list-item-content>
                    <v-list-item-title id="hF">
                      {{ item.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-slide-x-reverse-transition>
          <!-- Main Pages -->
          <v-list-item
            v-for="(item, i) in pageItems.slice(3, 6)"
            :key="i"
            :to="item.to"
            class="grey lighten-4 rounded-lg mx-2 my-2 primary--text"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title id="hF">
                {{ item.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <!-- Theme Switch -->
        <!-- <v-col cols="12" align="center">
          <p>{{ $vuetify.theme.isDark ? 'Dark' : 'Light' }}</p>
          <v-row>
            <v-col cols="12" class="d-flex justify-center pt-0">
              <v-switch class="mt-0" @click="swap" />
            </v-col>
          </v-row>
        </v-col> -->
      </v-navigation-drawer>
    </v-expand-x-transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AppTopBar',
  data() {
    return {
      sideDrawer: null,
      // Searching
      descriptionLimit: 40,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
      // Current Path
      pathName: this.$route.path,
      // Search XS
      dialog: false,
      // Products Menu
      closeOnClick: true,
      // TESTS Menu fav: true,
      menu: false,
      menuTwo: false,
    }
  },

  computed: {
    ...mapState({
      // Rev Inner
      revInner: (state) => state.main.revInner,
      revInnerTwo: (state) => state.main.revInnerTwo,
      revInnerThree: (state) => state.main.revInnerThree,
      showbarMain: (state) => state.main.showbarMain,
      // Data
      projectsArray: (state) => state.ThreeD.projectsArray,
      pageItems: (state) => state.main.items,
    }),
    theme() {
      return this.$vuetify.theme.isDark ? 'dark' : 'light'
    },
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
      // Combine both arrays & duplicate to var
      const threeArrays = [...this.projectsArray, ...this.pageItems]
      this.entries = threeArrays
      this.isLoading = false
    },
    // Path - updates with the new path of the route.
    $route: function (value) {
      this.pathName = value.path
      this.dialog = false
    },
  },
  methods: {
    ...mapActions({
      activateRevInner: 'main/activateRevInner',
      activateRevInnerTwo: 'main/activateRevInnerTwo',
      showBarSearchMainNav: 'main/showBarSearchMainNav',
    }),
    touchAll() {
      const value = this.$vuetify.theme.themes[this.theme]
      this.$vuetify.theme.themes[this.theme] = {}
      this.$vuetify.theme.themes[this.theme] = value
    },
    swap() {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark

      // necessary to reset colors after changing the theme, perhaps a Vuetify.js bug
      this.touchAll(1)
    },
    // Search
    qa(key) {
      const threeArrays = [...this.projectsArray, ...this.pageItems]
      return threeArrays.filter((item) => item.key === key)
    },
    // goTo function is passed params from btn for looped component
    // Note: will need to find object by a key or unique string or number
    // goTo is based off two separate arrays
    goTo(id) {
      // Link Filter
      if (id >= 81) {
        // Link regular page in pages or tabs
        const arr = [...this.pageItems]
        let route = ''
        for (let i = 0; i < arr.length; i++) {
          if (id === arr[i].id) {
            route = arr[i].to
          }
        }
        const routeName = route
        return routeName
      } else if (id < 81) {
        // Check if route is nested route
        const path = this.pathName

        // If link too /IN/Products other product Loop
        if (path.includes('/threeD/') === true) {
          const routeName = id
          return routeName
        } else {
          // if link too /IN/Products if on other IN
          const routeName = '../' + 'threeD/' + id
          return routeName
        }
      }
    },
  },
}
</script>

<style>
.backgroundColor {
  background-color: rgba(0, 0, 0, 0.4) !important;
}
.backgroundColorTopNav {
  background-color: rgba(0, 0, 0, 0.4) !important;
}
.rightBorder {
  border-right: solid 2px rgb(255, 255, 255) !important;
}
.v-autocomplete__content.v-menu__content {
  border-radius: 10px !important;
  margin-top: 10px !important;
}
.font-size-plus {
  font-size: 16px !important;
}
</style>
