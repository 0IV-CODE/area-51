<template>
  <!-- Note: Create gif for black box -->
  <v-container>
    <!-- Intro Video Section -->
    <v-row class="flex-row-reverse flex-sm-row-reverse flex-md-row">
      <v-col cols="0" md="6" class="d-none d-sm-flex"></v-col>
      <v-col cols="6" align="center" class="mb-0 mb-sm-n14 mt-14 mt-md-0">
        <p class="text-h5 text-sm-h3 black--text mt-7 mt-lg-0">
          <b>About Me</b>
        </p>
      </v-col>
      <v-col cols="6">
        <v-img
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Taking-notes-amico_5-4RLp4Qvk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604306"
          alt="Work illustrations by Storyset"
          contain
          height="350"
          class="d-none d-sm-flex"
        ></v-img>
        <v-img
          src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Taking-notes-amico_5-4RLp4Qvk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604306"
          alt="Work illustrations by Storyset"
          contain
          height="225"
          class="d-flex d-sm-none"
        ></v-img>
      </v-col>
      <v-col
        cols="12"
        sm="8"
        md="6"
        xl="5"
        align="center"
        class="mt-0 mt-md-14 pt-0 pt-md-14"
      >
        <v-card
          height="300"
          class="black pa-14 mr-0 mr-sm-n14 mr-md-0 rounded-xl d-none d-sm-flex"
        >
          <v-img
            src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Profile-data-bro_MSKkkjLQO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025603987"
            alt="Work illustrations by Storyset"
            contain
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer class="py-14 d-none d-sm-flex"></v-spacer>
    <!-- Pro summary cards sm-xl-->
    <v-row class="d-none d-sm-flex">
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <v-col cols="12" xl="8" align="start">
        <p class="text-h6 text-sm-h4 text-xl-h3 black--text my-0">
          <b>Part of my Journey</b>
        </p>
      </v-col>
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <!-- HTML & CSS -->
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <v-col cols="0" sm="6" md="4" xl="3">
        <v-card class="white pa-4" shaped elevation="20">
          <p class="black--text" align="center"><b>HTML & CSS</b></p>
          <p>
            At the end of 2020 after moving from California to Missouri, I felt
            the strong urge to learn how to code, and yes it was for the
            childish hope to be a so called hacker.
          </p>
        </v-card>
      </v-col>
      <!-- Angular Bootcamp -->
      <v-col cols="0" sm="6" md="4" xl="3">
        <v-card class="white pa-4" shaped elevation="20">
          <p class="black--text" align="center"><b>Angular Bootcamp</b></p>
          <p>
            I began with tuturial hell, brutal tuturials left and right.
            Suddenly out of thin air arrised the opportunity to learn a
            framework. I took the opportunity and half way through failed.
          </p>
        </v-card>
      </v-col>
      <v-col cols="0" sm="3" class="d-none d-sm-flex d-md-none"></v-col>
      <!-- Re-learned HTML, CSS, & JS -->
      <v-col cols="0" sm="6" md="4" xl="3">
        <v-card class="white pa-4" shaped elevation="20">
          <p class="black--text" align="center">
            <b>Re-learned HTML, CSS, & JS</b>
          </p>
          <p>
            Failure is something you have to overcome in order to suceed. I went
            back to the self taught route. Project after project I learned how
            to google, prioritize, and visualize wireframes.
          </p>
        </v-card>
      </v-col>
    </v-row>
    <v-spacer class="py-14 d-none d-sm-flex"></v-spacer>
    <!-- 3 Sections More sm-xl-->
    <v-row class="d-none d-sm-flex">
      <!-- IT Specialist -->
      <v-col cols="0" xl="2" class="d-none d-xl-flex"></v-col>
      <v-col cols="0" sm="12" lg="4" xl="3" class="pa-7">
        <v-row>
          <v-col cols="12" sm="6" lg="12">
            <v-img
              src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Secure-Server-amico_CbrBrnzFT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604075"
              alt="Technology illustrations by Storyset"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6" lg="12">
            <v-card class="white pa-4" shaped elevation="20">
              <p class="black--text" align="center">
                <b>IT Specialist</b>
              </p>
              <p>
                Towards the end of 2021 once again opportunity was at hand.
                Disguised within was the another opportunity to learn skills I
                was yet to know. In the coming months my IT GED levels rose
                dramatically thanks to my Sensei.
              </p>
              <v-row justify="space-around">
                <v-col cols="auto">
                  <!-- Dialog IT Specialist -->
                  <v-dialog transition="dialog-top-transition" max-width="600">
                    <template #activator="{ on, attrs }">
                      <v-btn
                        outlined
                        class="black--text rounded-pill"
                        v-bind="attrs"
                        v-on="on"
                      >
                        Read More
                      </v-btn>
                    </template>
                    <template #default="dialog">
                      <v-card class="pa-7 rounded-xl">
                        <v-row>
                          <v-col cols="12" align="end" class="px-0 pt-2 pb-0">
                            <v-btn
                              outlined
                              class="black--text"
                              @click="dialog.value = false"
                              ><v-icon color="black">mdi-close</v-icon></v-btn
                            >
                          </v-col>
                        </v-row>
                        <v-row
                          class="mt-n4 flex-row-reverse flex-sm-row-reverse flex-sm-column"
                        >
                          <v-col cols="6" sm="12">
                            <v-img
                              height="300"
                              contain
                              class="d-none d-sm-flex"
                              src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Secure-Server-amico_CbrBrnzFT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604075"
                              alt="Technology illustrations by Storyset" />
                            <v-img
                              class="d-flex d-sm-none"
                              src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Secure-Server-amico_CbrBrnzFT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604075"
                              alt="Technology illustrations by Storyset"
                          /></v-col>
                          <v-col cols="6" sm="12" align="center" class=""
                            ><p class="black--text mt-10 mb-n5">
                              <b>IT Specialist</b>
                            </p></v-col
                          >
                        </v-row>
                        <v-row>
                          <v-col cols="12">
                            <!-- 3 IT Points in dialog box popup -->
                            <ul>
                              <li>
                                <p>
                                  There is plenty to talk about in this field,
                                  so I'll try to keep it short. When I joined
                                  the field of IT I had some experience, but
                                  like any job what you think you know is thrown
                                  out the door by either betters ways or just
                                  company standards. At first I was mainly "Help
                                  Desk" along with desktop/laptop setup since a
                                  document could guide me, and little
                                  supervision was needed.
                                </p>
                              </li>
                              <li>
                                <p>
                                  Later after building my own pc from scratch,
                                  and setting up a home network with the
                                  capacity to handle a small business I was
                                  given more responsibility. Basic Active
                                  Directory changes, account management, admin
                                  access, and much more was given to me in sight
                                  of seeing the ease of use I found in systems.
                                </p>
                              </li>
                              <li>
                                <p>
                                  After half a year in the company the CTO and I
                                  wondered if we could build website for tech
                                  inventory. We wanted to have something that
                                  had CRUD functionality for tech items in
                                  database, dashboard insights, log of changes,
                                  and export to Excel option. The answer was
                                  yes, and together we started the UI/UX
                                  process... (To be Continued)
                                </p>
                              </li>
                            </ul>
                          </v-col>
                        </v-row>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <!-- Vue Framework & Dependencies -->
      <v-col
        cols="0"
        sm="12"
        lg="4"
        xl="3"
        class="my-7 my-lg-0 black rounded-xl pa-7"
      >
        <v-row>
          <v-col cols="12" sm="6" lg="12">
            <v-card class="white pa-4" shaped elevation="20">
              <p class="black--text" align="center">
                <b>Vue Framework & Dependencies</b>
              </p>
              <p>
                Again after a pair of months opportunity showed up. This time
                unlike the last few time I was prepared, so I was able to handle
                the sudden change. Wait Change? yes I was given the opportunity
                to learn the companies framework & dependencies.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6" lg="12">
            <v-img
              src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Developer-activity-amico_lniUgsomI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604093"
              alt=""
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <!-- UI/UX -->
      <v-col cols="0" sm="12" lg="4" xl="3" class="pa-7">
        <v-row>
          <v-col cols="12" sm="6" lg="12">
            <v-img
              src="https://i.imgur.com/JGGngqp.png"
              alt="Work illustrations by Storyset"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6" lg="12">
            <v-card class="white pa-4" shaped elevation="20">
              <p class="black--text" align="center">
                <b>UI/UX</b>
              </p>
              <p>
                Shortly after I decided to venture out to the unkown to locate
                the hidden treasure of "UI/UX". This venture proved to be
                lucrative in many ways, and now I'm developing it into the
                pre-production stage. This step along with the last few steps
                made me realize that I have a long way to go.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-spacer class="py-14 d-none d-sm-flex"></v-spacer>
    <!-- Pro summary cards xs-->
    <v-row class="d-flex d-sm-none">
      <v-col cols="12" align="center">
        <p class="text-h6 text-sm-h4 text-xl-h3 black--text my-0">
          <b>Part of my Journey</b>
        </p>
      </v-col>
      <v-col cols="12" class="px-0">
        <v-stepper v-model="e6" vertical flat class="">
          <!-- HTML & CSS -->
          <v-stepper-step editable step="1"> HTML & CSS </v-stepper-step>
          <v-stepper-content step="1">
            <v-card class="mb-12 ma-1 pa-3 white" shaped elevation="4">
              <p>
                At the end of 2020 after moving from California to Missouri, I
                felt the strong urge to learn how to code, and yes it was for
                the childish hope to be a so called hacker.
              </p>
              <v-btn class="black white--text rounded-pill" @click="e6 = 2">
                Continue
              </v-btn>
              <v-btn
                class="black--text rounded-pill mx-2"
                outlined
                @click="e6 = 6"
              >
                End
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- Angular Bootcamp -->
          <v-stepper-step editable step="2"> Angular Bootcamp </v-stepper-step>
          <v-stepper-content step="2">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                I began with tuturial hell, brutal tuturials left and right.
                Suddenly out of thin air arrised the opportunity to learn a
                framework. I took the opportunity and half way through failed.
              </p>
              <v-btn class="black white--text rounded-pill" @click="e6 = 3">
                Continue
              </v-btn>
              <v-btn
                class="black--text rounded-pill mx-2"
                outlined
                @click="e6 = 1"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- Re-learned HTML, CSS, & JS -->
          <v-stepper-step editable step="3">
            Re-learned HTML, CSS, & JS
          </v-stepper-step>
          <v-stepper-content step="3">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                Failure is something you have to overcome in order to suceed. I
                went back to the self taught route. Project after project I
                learned how to google, prioritize, and visualize wireframes.
              </p>
              <v-btn class="black white--text rounded-pill" @click="e6 = 4">
                Continue
              </v-btn>
              <v-btn
                class="black--text rounded-pill mx-2"
                outlined
                @click="e6 = 2"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- IT Specialist -->
          <v-stepper-step editable step="4"> IT Specialist</v-stepper-step>
          <v-stepper-content step="4">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                Towards the end of 2021 once again opportunity was at hand.
                Disguised within was the another opportunity to learn skills I
                was yet to know. In the coming months my IT GED levels rose
                dramatically thanks to my Sensei.
              </p>
              <v-btn
                outlined
                class="black--text rounded-pill ma-2"
                @click="e6 = 5"
              >
                Continue
              </v-btn>
              <!-- Dialog IT Specialist -->
              <v-dialog transition="dialog-top-transition" max-width="100%">
                <template #activator="{ on, attrs }">
                  <v-btn
                    class="black--text rounded-pill ma-2"
                    outlined
                    v-bind="attrs"
                    v-on="on"
                  >
                    Read More
                  </v-btn>
                </template>
                <template #default="dialog">
                  <v-card class="pa-7 rounded-xl" elevation="24">
                    <v-row>
                      <v-col cols="12" align="end" class="px-0 pt-2 pb-0">
                        <v-btn
                          outlined
                          class="black--text"
                          @click="dialog.value = false"
                          ><v-icon color="black">mdi-close</v-icon></v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-row
                      class="mt-n4 flex-row-reverse flex-sm-row-reverse flex-sm-column"
                    >
                      <v-col cols="6" sm="12">
                        <v-img
                          class="d-flex d-sm-none"
                          src="https://ik.imagekit.io/invimgs0101/IV-CODE/illustrations/Secure-Server-amico_CbrBrnzFT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656025604075"
                          alt="Technology illustrations by Storyset"
                      /></v-col>
                      <v-col cols="6" sm="12" align="center" class=""
                        ><p class="black--text mt-10 mb-n5">
                          <b>IT Specialist</b>
                        </p></v-col
                      >
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <!-- 3 IT Points in dialog box popup -->
                        <ul>
                          <li>
                            <p>
                              There is plenty to talk about in this field, so
                              I'll try to keep it short. When I joined the field
                              of IT I had some experience, but like any job what
                              you think you know is thrown out the door by
                              either betters ways or just company standards. At
                              first I was mainly "Help Desk" along with
                              desktop/laptop setup since a document could guide
                              me, and little supervision was needed.
                            </p>
                          </li>
                          <li>
                            <p>
                              Later after building my own pc from scratch, and
                              setting up a home network with the capacity to
                              handle a small business I was given more
                              responsibility. Basic Active Directory changes,
                              account management, admin access, and much more
                              was given to me in sight of seeing the ease of use
                              I found in systems.
                            </p>
                          </li>
                          <li>
                            <p>
                              After half a year in the company the CTO and I
                              wondered if we could build website for tech
                              inventory. We wanted to have something that had
                              CRUD functionality for tech items in database,
                              dashboard insights, log of changes, and export to
                              Excel option. The answer was yes, and together we
                              started the UI/UX process... (To be Continued)
                            </p>
                          </li>
                        </ul>
                      </v-col>
                    </v-row>
                  </v-card>
                </template>
              </v-dialog>

              <v-btn
                class="black--text rounded-pill ma-2"
                outlined
                @click="e6 = 3"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- Vue Framework & Dependencies-->
          <v-stepper-step editable step="5">
            Vue Framework & Dependencies</v-stepper-step
          >
          <v-stepper-content step="5">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                Again after a pair of months opportunity showed up. This time
                unlike the last few time I was prepared, so I was able to handle
                the sudden change. Wait Change? yes I was given the opportunity
                to learn the companies framework & dependencies.
              </p>
              <v-btn class="black white--text rounded-pill" @click="e6 = 6">
                Continue
              </v-btn>
              <v-btn
                class="black--text rounded-pill mx-2"
                outlined
                @click="e6 = 4"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
          <!-- UI/UX-->
          <v-stepper-step editable step="6"> UI/UX</v-stepper-step>
          <v-stepper-content step="6">
            <v-card class="mb-12 ma-1 white pa-3" shaped elevation="4">
              <p>
                Shortly after I decided to venture out to the unkown to locate
                the hidden treasure of "UI/UX". This venture proved to be
                lucrative in many ways, and now I'm developing it into the
                pre-production stage. This step along with the last few steps
                made me realize that I have a long way to go.
              </p>
              <v-btn class="black white--text rounded-pill" @click="e6 = 1">
                Start
              </v-btn>
              <v-btn
                class="black--text rounded-pill mx-2"
                outlined
                @click="e6 = 5"
              >
                Back
              </v-btn>
            </v-card>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    e6: 1,
  }),
}
</script>

<style scoped></style>
