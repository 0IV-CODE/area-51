<template>
  <v-footer class="black pt-4 mt-10">
    <!-- XS-XL -->
    <v-card elevation="0" flat class="transparent">
      <v-row>
        <!-- Search for IN Section xs-sm -->
        <v-col
          cols="0"
          md="3"
          lg="4"
          xl="5"
          align="center"
          class="d-none d-md-flex"
        >
          <v-img
            height="150"
            contain
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_WHITE_TQ9YPD0KD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848531"
          />
        </v-col>
        <v-col cols="12" sm="12" md="9" lg="8" xl="7" align="center">
          <v-row>
            <!-- Section Pages -->
            <v-col cols="12" sm="4">
              <p id="hF" class="text-h5 white--text white-text">Pages</p>
              <v-row>
                <v-col cols="12" align="center">
                  <!-- Sub Links for Pages -->
                  <NuxtLink to="/" rel="next">
                    <p id="bF" class="white--text">Home</p>
                  </NuxtLink>
                  <NuxtLink to="/About" rel="next">
                    <p id="bF" class="white--text">About</p>
                  </NuxtLink>
                  <NuxtLink to="/ContactUs" rel="next">
                    <p id="bF" class="white--text">Contact</p>
                  </NuxtLink>
                  <NuxtLink to="/IN/Resources" rel="next">
                    <p id="bF" class="white--text">Resources</p>
                  </NuxtLink>
                </v-col>
              </v-row>
            </v-col>
            <!-- Section Products -->
            <v-col cols="12" sm="4">
              <p id="hF" class="text-h5 white--text white-text">Projects</p>
              <v-row>
                <v-col cols="12" align="center">
                  <!-- Sub Links for Pages -->
                  <NuxtLink to="/IN/AllProducts" rel="next">
                    <p id="bF" class="white--text">All</p>
                  </NuxtLink>
                  <NuxtLink to="/IN/AllProducts?tab=Panel" rel="next">
                    <p id="bF" class="white--text">Panel</p>
                  </NuxtLink>
                </v-col>
              </v-row>
            </v-col>
            <!-- Section Policies -->
            <v-col cols="12" sm="4">
              <p id="hF" class="text-h5 white--text white-text">Policies</p>
              <v-row>
                <v-col cols="12" align="center">
                  <!-- Sub Links for Pages -->
                  <NuxtLink to="/PrivacyPolicy" rel="next">
                    <p id="bF" class="white--text">PrivacyPolicy</p>
                  </NuxtLink>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <!-- Search for IN Section xs-sm -->
        <v-col cols="12" md="0" align="center" class="d-flex d-md-none">
          <v-img
            height="100"
            contain
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/logos/ivcode-logo/Wolf_WHITE_TQ9YPD0KD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656026848531"
          />
        </v-col>
        <v-col cols="12" align="center" class="white--text">
          <span id="bF"
            >Copyright &copy; IV-CODE.io, All Rights Reserves -
            {{ new Date().getFullYear() }}</span
          >
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppFooter',
  data() {
    return {}
  },

  computed: {
    ...mapState({
      boxesLoop: (state) => state.main.boxesLoop,
      // Data
      productsArr: (state) => state.products.productsArr,
      pageItems: (state) => state.main.items,
    }),
  },
  watch: {},

  methods: {},
}
</script>

<style>
/* Separate */
.borderRight {
  border-right: solid;
}
/* Links */
.v-application a {
  color: inherit !important;
  text-decoration: none !important;
}
</style>
