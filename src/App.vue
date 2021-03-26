<template>
<div>

  <Nav />
    <main class="form-signin">
      <router-view></router-view>
    </main>
</div>
</template>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.email:focus, .pwd:focus {
  box-shadow: none;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  outline: none;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
<script>
import Nav from '@/components/Nav';

export default {
  components: { Nav }
}
</script>