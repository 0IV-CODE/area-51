<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="mb-12">Nuxt + Google Sheet = Databse</h1>
        <!-- Resources Used Links -->
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="2">
            <p><b>Resource used:</b></p>
            <v-btn
              link
              target="_blank"
              href="https://www.npmjs.com/package/nuxt-google-sheets-parser"
            >
              Dependancy <v-icon class="mx-2">mdi-link</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="2">
            <p><b>Google Sheet:</b></p>
            <v-btn
              link
              target="_blank"
              href="https://docs.google.com/spreadsheets/d/16Vi5E42ZBAV54t4vYwg45nVsHX2TWJG5mwuWw6YWwSs/edit?usp=sharing"
            >
              Sheet<v-icon class="mx-2">mdi-link</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <p class="mt-8"><b>Image/Code Example:</b></p>
        <!-- Code EX IMG -->
        <v-img
          class="my-5"
          src="https://ik.imagekit.io/invimgs0101/Area-51/Code-Snaps/code-nuxt-sheets-02_Rta04Dy61.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677213104903"
        >
          <template #placeholder>
            <v-sheet color="grey lighten-4" class="fill-height mt-8">
              <v-skeleton-loader
                v-bind="attrs"
                class="mx-auto grey lighten-4"
                type="image"
              />
            </v-sheet>
          </template>
        </v-img>
        <v-card height="100" class="my-2" elevation="0" flat />
        <!-- Looped Objects from Sheets -->
        <h1 class="mb-12">Live Example</h1>
        <v-row class="mt-8">
          <v-col
            v-for="(item, index) in items"
            :key="`asset_index_${index}`"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card width="300" class="pa-2 ma-1">
              <v-img height="100" contain :src="item.img">
                <template #placeholder>
                  <v-sheet color="grey lighten-4" class="fill-height mt-8">
                    <v-skeleton-loader
                      v-bind="attrs"
                      class="mx-auto grey lighten-4"
                      type="image"
                    />
                  </v-sheet>
                </template>
              </v-img>
              <p class="text-h4 blue--text mb-0">
                <b>{{ item.title }}</b>
              </p>
              <p>{{ item.desc }}</p>
              <v-card-actions>
                <v-btn outlined color="blue" link :to="item.link">Home</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'GoogleSheets',
  data() {
    return {
      // DB
      items: [],
      // Skeleton Loader
      attrs: {
        boilerplate: false,
        elevation: 2,
        transition: 'fade-transition',
      },
    }
  },
  async mounted() {
    // see: https://docs.google.com/spreadsheets/d/10WDbAPAY7Xl5DT36VuMheTPTTpqx9x0C5sDCnh4BGps
    const sheetId = '16Vi5E42ZBAV54t4vYwg45nVsHX2TWJG5mwuWw6YWwSs'

    const data1 = await this.parseSheet(sheetId)
    this.items = data1
    // console.log(data1)
  },
  methods: {
    parseSheet(sheetId, sheetInfo = { sheetId: null, sheetName: null }) {
      return this.$gsparser.parse(sheetId, sheetInfo)
    },
  },
}
</script>

<style scoped></style>
