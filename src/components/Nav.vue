<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Home</router-link> 

      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item" v-if="!this.$cookies.get('access_token')">
            <router-link to="/login" class="nav-link active">Login</router-link>
          </li>
          <li class="nav-item" v-if="this.$cookies.get('access_token')">
            <router-link to="/user_profile" class="nav-link active">User Profile</router-link>
          </li>
          <li class="nav-item" v-if="this.$cookies.get('access_token')">
            <router-link to="" v-on:click.native="logout" class="nav-link active">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Nav",
  methods: {
    logout() {
      this.$swal({
        showCancelButton: true,
        cancelButtonText:'Close',
        confirmButtonText:'Yes',
        type: 'warning',
        title: 'Are you sure?'
      }).then((res) => {
        if( res.dismiss == 'cancel' ) {
          return
        } else {
          this.$cookies.remove('access_token')
          this.$router.push({path: '/login'})
          location.reload()
        }
      })
    }
  }
}
</script>

<style scoped>

</style>