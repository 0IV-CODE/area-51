<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="0" class="d-md-none">
        <h1
          id="hF"
          class="primary--text text-h3 text-center text-md-left mt-md-16"
        >
          Contact Us
        </h1>
      </v-col>
      <v-col cols="0" md="1" lg="2" xl="3" class="d-none d-md-flex" />
      <!-- Body -->
      <v-col cols="12" md="10" lg="8" xl="6">
        <!-- Intro IMG & Passage -->
        <v-row>
          <v-col cols="12" align="center">
            <v-row class="flex-md-row-reverse">
              <!-- IMG -->
              <v-col cols="12" md="7" align="center">
                <v-img
                  contain
                  :height="imgH"
                  src="https://ik.imagekit.io/STBS/CUSA_Project/Resources/cyberscooty-usa_map_and_flag_h4U_sp4Jb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1668631538551"
                >
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
              </v-col>
              <!-- Passage -->
              <v-col cols="12" md="5" align="start">
                <h2
                  id="hF"
                  class="primary--text text-h3 d-none d-md-flex text-center text-md-left mt-md-16"
                >
                  Contact Us
                </h2>
                <p
                  id="hF"
                  class="secondary--text text-h5 text-center text-md-left"
                >
                  <b class="primary--text">Providing</b> Components Across all
                  50 States
                </p>
                <!-- Address -->
                <p id="bF" class="accent--text d-none d-md-flex mb-0">
                  Address:
                </p>
                <p class="d-none d-md-flex">502 Lowes Ln, Monett, MO 65708</p>
                <!-- Office Number -->
                <a href="tel:417-476-2600" rel="external">
                  <p id="bF" class="accent--text d-none d-md-flex mb-0">
                    Office Number
                  </p>
                  <p class="black--text d-none d-md-flex">417-476-2600</p>
                </a>
              </v-col>
              <!-- Maps -->
              <v-col cols="12">
                <v-dialog id="hF" v-model="dialog" width="320">
                  <template #activator="{ on, attrs }">
                    <v-btn v-bind="attrs" color="accent" outlined v-on="on">
                      <v-icon> mdi-google-maps </v-icon>/
                      <v-icon class="mr-2"> mdi-apple </v-icon>
                      View Our Location
                    </v-btn>
                  </template>
                  <!-- Dialog Box -->
                  <v-card align="center">
                    <v-card-title id="hF" class="text-h5 accent white--text">
                      Choose your Default
                    </v-card-title>
                    <!-- Link -->
                    <v-card-text>
                      <v-btn
                        id="bF"
                        class="pa-6 ma-2"
                        color="green darken-2"
                        outlined
                        link
                        href="https://goo.gl/maps/jGUanEGMUTmnpYdx9"
                        rel="external"
                        target="_blank"
                      >
                        Google Maps
                        <v-icon size="40" class="mx-2" color="green darken-2">
                          mdi-google-maps
                        </v-icon>
                      </v-btn>
                      <v-btn
                        id="bF"
                        class="pa-6 ma-2"
                        outlined
                        link
                        href="https://maps.apple.com/?address=Lowes%20Ln,%20Monett,%20MO%20%2065708,%20United%20States&ll=36.911827,-93.896304&q=Lowes%20Ln&_ext=EiYpkCStjiN0QkAxGk/dFrl5V8A5DvrS6kl1QkBBTFJlAwF5V8BQBA%3D%3D&t=m"
                        rel="external"
                        target="_blank"
                      >
                        Apple Maps
                        <v-icon size="40" class="mx-3"> mdi-apple </v-icon>
                      </v-btn>
                    </v-card-text>

                    <v-divider />

                    <v-card-actions>
                      <v-spacer />
                      <v-btn
                        id="bF"
                        color="primary"
                        text
                        @click="dialog = false"
                      >
                        back
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <br />
        <!-- Info & Form -->
        <v-row :class="cardClass">
          <!-- Info -->
          <v-col cols="1" sm="2" md="0" class="d-flex d-md-none" />
          <v-col cols="5" sm="4" md="0" class="d-flex d-md-none" align="start">
            <div>
              <!-- Address -->
              <p id="bF" class="accent--text mb-0">Address:</p>
              <p>502 Lowes Ln, Monett, MO 65708</p>
            </div>
          </v-col>
          <v-col cols="5" sm="4" md="0" class="d-flex d-md-none" align="start">
            <!-- Office Number -->
            <a href="tel:417-476-2600" rel="external">
              <p id="bF" class="accent--text mb-0">Office Number</p>
              <p class="black--text">417-476-2600</p>
            </a>
          </v-col>
          <!-- Form -->
          <v-col cols="12">
            <p id="hF" class="primary--text text-h5 text-center text-md-left">
              Contact Form
            </p>
            <v-form ref="form" lazy-validation @submit.prevent="sendEmail">
              <v-text-field
                v-model="firstName"
                solo
                outlined
                class="rounded-lg"
                name="firstName"
                color="primary"
                label="First Name"
                required
                :rules="requiredRule"
              />

              <v-text-field
                v-model="lastName"
                solo
                outlined
                class="rounded-lg"
                name="lastName"
                color="primary"
                label="Last Name"
                persistent-hint
                required
                :rules="requiredRule"
              />

              <v-text-field
                v-model="email"
                solo
                outlined
                class="rounded-lg"
                color="primary"
                label="Email"
                required
                :rules="emailRules"
              />

              <v-autocomplete
                v-model="purpose"
                solo
                outlined
                class="rounded-lg"
                name="Reason"
                color="primary"
                required
                :items="[
                  'Job Request',
                  'More Information',
                  'Business Inquiry',
                  'Customer Service',
                  'Career',
                  'Leave Review',
                  'Other',
                ]"
                label="Reason"
                :rules="requiredRule"
              />

              <v-textarea
                v-model="commentSection"
                height="200"
                solo
                outlined
                class="rounded-lg"
                name="Notes/Comments"
                clearable
                color="primary"
                label="Notes/Comments"
                :rules="commentRules"
              />

              <!-- Actual Message being sent -->
              <v-textarea v-model="message" class="d-none" name="message" />

              <v-row>
                <v-col cols="12" align="center">
                  <!-- Recaptcha -->
                  <!-- <recaptcha
                    class="mb-6"
                    @error="onError"
                    @success="onSuccess"
                    @expired="onExpired"
                  /> -->
                  <v-btn
                    id="bF"
                    outlined
                    color="secondary"
                    :loading="submitLoading"
                    @click="sendEmail()"
                  >
                    Submit Form
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
            <v-spacer class="pa-4 ma-4" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { sendForm } from '@emailjs/browser'
export default {
  components: {},
  data() {
    return {
      dialog: false,
      valid: false,
      submitLoading: false,
      firstName: '',
      lastName: '',
      commentRules: [
        (v) => !!v || 'Comments are required',
        (v) => v.length <= 425 || 'Max 425 characters',
      ],
      recaptcha: '',
      purpose: '',
      commentSection: '',
      requiredRules: [(v) => !!v || 'Full Name is required'],
      email: '',
      requiredRule: [(v) => !!v || 'Field is required'],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },

  // Vue Meta
  head() {
    return {
      // %s is title
      titleTemplate: '%s - Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact us and get in touch',
        },
      ],
    }
  },
  computed: {
    imgH() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 300
        case 'md':
          return 400
        case 'lg':
          return 400
        case 'xl':
          return 400
        default:
          return 300
      }
    },
    cardClass() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'insetcard mt-8'
        case 'sm':
          return 'insetcard mt-8'
        case 'md':
          return ''
        case 'lg':
          return ''
        case 'xl':
          return ''
        default:
          return ''
      }
    },
    // siteKey () {
    //   const key = this.$config.R_SITE_KEY
    //   return key
    // },
    message() {
      return `${this.firstName} ${this.lastName} would like to receive more information in regards to ${this.purpose}.
      \nTheir email address is ${this.email}.
      \nAdditional comments: ${this.commentSection}.`
    },
  },

  methods: {
    copyText() {
      const input = document.getElementById('tocopy')
      input.select()
      document.execCommand('copy')
    },
    validate() {
      return this.$refs.form.validate()
    },
    // onCaptchaVerified (recaptchaToken) {
    //   this.recaptcha = recaptchaToken
    //   this.validateCaptcha = true
    // },
    // onCaptchaExpired () {
    //   this.$refs.recaptcha.reset()
    // },
    // async submit () {
    //   if (this.validate()) {
    //     this.submitLoading = true
    //     await sendForm(
    //       process.env.VUE_APP_EMAILJS_SERVICE_ID,
    //       this.$config.emailJsTemplateID,
    //       this.$refs.form.$el,
    //       'user_iPMbDPSk51A8OI774zK0z'
    //     )
    //     .then(
    //       (result) => {
    //         // console.log('SUCCESS!', result.text)
    //         this.submitLoading = false
    //         return location.reload()
    //       },
    //       (error) => {
    //         console.error('FAILED...', error.text)
    //       }
    //     )
    //   }
    // }
    // onError(error) {
    //   console.log('Error happened:', error)
    // },

    // async sendEmail() {
    //   try {
    //     const token = await this.$recaptcha.getResponse()
    //     console.log('ReCaptcha token:', token)

    //     // send token to server alongside your form data
    //     const response = await fetch('/api/check-token', {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         token,
    //         email: this.email,
    //       }),
    //     }).then((res) => res.json())

    //     console.log('Server Response: ', response)

    //     // at the end you need to reset recaptcha
    //     await this.$recaptcha.reset()
    //   } catch (error) {
    //     console.log('Login error:', error)
    //   }
    // },

    // onSuccess(token) {
    //   console.log('Succeeded:', token)

    //   // Sumbit Form if Validated
    //   if (this.validate()) {
    //     this.submitLoading = true
    //     sendForm().then((result) => {
    //       this.$config.E_SERVICE_ID,
    //         this.$config.E_TEMPLATE_ID,
    //         this.$refs.form.$el,
    //         this.$config.E_PUBLIC_USER_ID
    //       console.log('SUCCESS!', result.text)
    //       this.submitLoading = false
    //       return location.reload()
    //     })
    //     // }, (error) => {
    //     //   console.log('FAILED...', error.text)
    //     // })
    //   }
    // },

    // onExpired() {
    //   console.log('Expired')
    // },
  },
}
</script>

<style></style>
