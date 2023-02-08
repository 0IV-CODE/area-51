<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1
          id="hF"
          class="black--text text-h3 text-center text-md-left mt-md-16"
        >
          Contact Us
        </h1>
      </v-col>
      <v-col cols="0" md="1" lg="2" xl="3" class="d-none d-md-flex" />
      <!-- Body -->
      <v-col cols="12" md="10" lg="8" xl="6">
        <br />
        <!-- Info & Form -->
        <v-row :class="cardClass">
          <!-- Form -->
          <v-col cols="12">
            <p id="hF" class="black--text text-h5 text-center text-md-left">
              Contact Form
            </p>
            <v-form ref="form" lazy-validation @submit.prevent="sendEmail">
              <v-text-field
                v-model="firstName"
                solo
                outlined
                class="rounded-lg"
                name="firstName"
                color="black"
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
                color="black"
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
                color="black"
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
                color="black"
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
                color="black"
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
                    color="black"
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
