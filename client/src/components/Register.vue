<template>
  <div class="register">
    <h1>The Wonder of the world</h1>
    <form class="registerForm">
      <label><input type="email" name="email" value="" placeholder="email" v-model="email"></label>
      <br>
      <label><input type="password" name="password" value="" placeholder="password" v-model="password">
      </label>
      <br>
      <button @click="register"> Register </button>
    </form>
  </div>
</template>

<script>
  import autho from '@/services/autho'
export default {
  name: 'register',
data () {
    return {
      email: '',
      password: ''
    }
  },
  methods:{
     async register(){
        const response = await autho.register({
          email: this.email,
          password: this.password,
        })
        console.log(response.data);
      }
  }
}
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
