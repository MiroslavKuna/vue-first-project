<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <router-view />
      </div>
    </div>
  </div>
  <nav>
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </nav>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
