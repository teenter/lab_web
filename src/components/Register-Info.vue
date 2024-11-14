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

       let headers = {
        'Content-Type': 'application/json'
        };

        headers['Authorization'] = 'Bearer' + JWT
        this.$http.get('data/persons', {headers})
        .then(response => {
          response.json().then(data =>{
            console.log(data);
            data.forEach(person => this.persons.push(person));
          }
        )
      }, error => {
      if(error.status === 401) {
        alert('Помилка завантаження даних, \n спочатку треба авторизуватись');
      } else {
        alert('Невідома помилка, \n повторіть пізніше');
      }

      async nenoughrights() {
        let headers = {
        'Content-Type': 'application/json'
        };

        headers['Authorization'] = 'Bearer' + JWT
        this.$http.delete('data/persons/' + this.person.id, {headers})
        .then (response => {
          this.persons.splice(this.persons.indexOf(this.person), 1);
        }, error => {
          if (error.status === 401) {
            alert('Помилка видалення даних, \n спочатку треба авторизуватись');
          } else if (error.status === 403) {
            alert('Недостатньо прав');
          } else {
            alert('Невідома помилка,\n повторіть пізніше');
          }
          }
        )
      }

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
    )}
    }
}


</script>




    