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
import axios from 'axios';
import RegisterListElement from './Register-List.vue';

export default {
  name: 'RegistersInfoBar',
  components: {
    RegisterListElement,
  },
  props: ['registerItems'],
  methods: {
    async load() {
      const JWT = localStorage.getItem('jwt_token');  // Получаем токен из localStorage

      if (!JWT) {
        console.error('JWT token is missing');
        return;
      }

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JWT,
      };

      try {
        const response = await axios.get('http://localhost:8080/data', { headers });
        console.log(response.data);  // Для отладки
        // Используем событие для обновления данных в родительском компоненте
        this.$emit('update-register-items', response.data);
      } catch (error) {
        console.error('Error loading register data:', error);
      }
    },
  },
};
</script>




    