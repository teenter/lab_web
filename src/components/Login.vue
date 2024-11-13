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
        const response = await axios.post('http://localhost:8006/authorisation', {
          login: this.login,
          password: this.password
        })
        
        this.token = response.data
        localStorage.setItem('jwt_token', this.token);
      } catch (error) {
        this.message =
          'An error occurred: ' + (error.response ? error.response.data.message : error.message)
      }
    }
  }
}
</script>



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
