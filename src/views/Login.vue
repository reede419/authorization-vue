<template>
  <form @submit.prevent="submit()">
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <input v-model="email" type="email" class="form-control email" placeholder="name@example.com">

      <input v-model="password" type="password" @input="changePwd" class="form-control pwd" placeholder="Password">

    <p v-if="this.invalidEmail">
      Invalid email
    </p>
    <p v-if="this.invalidPwd">
      Invalid password (must be 50 characters), now {{countPwd}}
    </p>
    <button class="w-100 btn btn-lg btn-primary">Sign in</button>

  </form>
</template>

<script>
import {authService} from '../services/auth.services'
import store from '../store/store'


export default {
  name: 'Login',
  data() {
    return {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
      invalidEmail: false,
      invalidPwd: false,
      countPwd: 0
    }
  },
  methods: {
    async submit() {
      const formData = {
        email: this.email,
        password: this.password
      }
      if( !this.validEmail(this.email) || !this.validPassword(this.password) ) {
        if ( !this.validEmail(this.email) ) {
            this.invalidEmail = true;
        } else {
            this.invalidPwd = true;
            this.countPwd = this.password.length
        }
      } else {
        this.invalidEmail = false;
        this.invalidPwd = false;
        authService.login(formData, this)
          .then(res => {
            if ( res.error ) {
              this.$swal(res.error, "", "error")
            } else if ( res.token ) {
              this.$cookies.set('access_token', res.token);
              store.getters.auth.loggedIn = true
              this.$swal("You are logged in!", "", "success")
                .then((res) => {
                  this.$router.push({path: '/'})
                  location.reload()
                })
            } else {
              this.$swal('Something went wrong...', "", "error")
            }
          })
      }
    },
    validEmail(email){
      var emailRes = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRes.test(email);
    },
    validPassword(password){
      var passwordRes = /^[a-zA-Z0-9_\ ]{50}$/;
      return passwordRes.test(password);
    },
    changePwd() {
      this.countPwd = this.password.length
      this.invalidPwd = false
    }
  }
}
</script>

