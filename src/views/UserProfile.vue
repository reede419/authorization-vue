<template>
  <div class="about">
    <h1>This is user profile page</h1>
    <img v-bind:src='this.user.avatar' alt="">
    <p>Name: {{this.user.first_name}}</p>
    <p>Surname: {{this.user.last_name}}</p>
    <p>Email: {{this.user.email}}</p>
  </div>
</template>

<script>
import { userService } from '../services/user.services';

export default {
  name: "homePage",
  data() {
      return {
        user: {}
      }
  },
  created() {
    userService.get_user(this).then((value) => {
        this.user =  value.data
    })
  }

}
</script>
