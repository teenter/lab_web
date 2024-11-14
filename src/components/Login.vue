<template>
  <div class="greetings form">
    <h1 class="green">Login</h1>
    <form @submit.prevent="handleSubmit">
      <label for="login" class="green">Login</label>
      <input v-model="login" type="text" name="login" id="login" required />
      <label for="password" class="green">Password</label>
      <input v-model="password" type="password" name="password" id="password" required />
      <input class="submit" type="submit" value="Log in" />
    </form>
    <p v-if="message" class="message">{{ message }}</p>
    <p v-if="token" class="token">JWT: {{ token }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      login: '',
      password: '',
      message: '',
      token: ''
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:8012/authorization', {
          login: this.login,
          password: this.password
        })
        this.message = response.data.message
        this.token = response.data
        console.log(this.token)
        localStorage.setItem('jwt_token', this.token)
      } catch (error) {
        this.message =
          'An error occurred: ' + (error.response ? error.response.data.message : error.message)
      }
    }
  }
}
</script>

<style scoped>
.form {
  border-radius: 30%;
  border: 4px solid black;
  width: 300px;
  height: 220px;
  background-color: rgba(206, 183, 83, 0.637);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.form form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.token {
  color: rgb(56, 33, 55);
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.submit {
  margin-top: 15px;
}
</style>
