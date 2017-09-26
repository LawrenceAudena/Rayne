<template>
  <div class="register">
    <h1>The Wonder of the world</h1>
    <form class="registerForm">
      <label><input type="email" name="email" value="" placeholder="email"></label>
      <br>
      <label><input type="password" name="password" value="" placeholder="password">
      </label>
      <br>
      <button> register </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
