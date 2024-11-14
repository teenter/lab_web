<template>
  <div>
    <input type="button" value="Load" @click="load" />
    <register-list-element
      v-for="registerItem in registerItems"
      :key="registerItem.id"
      :item="registerItem"
    />
  </div>
</template>

<script>
import RegisterListElement from './Register-List.vue'

export default {
  name: 'RegistersInfoBar',
  components: {
    RegisterListElement
  },
  props: ['registerItems'],
  methods: {
    async load() {
      const JWT = localStorage.getItem('jwt_token') // Get token from localStorage

      if (!JWT) {
        console.error('JWT token is missing')
        return
      }

      try {
        const apiUrl = 'http://localhost:8080/data/posts'
        const requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + JWT
          }
        }
        fetch(apiUrl, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          })
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      } catch (error) {
        console.error('Error loading register data:', error)
      }
    }
  }
}
</script>
