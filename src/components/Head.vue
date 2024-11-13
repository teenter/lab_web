<template>
  <header class="header green">
    <h1 class="title">Authorization</h1>
    <nav class="login">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  position: fixed;        /* Фиксируем хедер вверху страницы */
  top: 0;                /* Выравниваем по верхней части */
  left: 0;               /* Выравниваем по левой части */
  right: 0;              /* Выравниваем по правой части */
  height: 8vh;           /* Устанавливаем высоту в 8% от высоты экрана */
  background-color: #3f372ccc; /* Цвет фона хедера */
  display: flex;         /* Используем Flexbox для выравнивания */
  align-items: center;   /* Вертикально центрируем контент */
  padding: 0 20px;       /* Добавляем отступы для эстетики */
}

.title {
  position: absolute;    /* Абсолютное позиционирование заголовка */
  left: 50%;             /* Сдвигаем заголовок на середину экрана */
  transform: translateX(-50%); /* Корректируем положение для центрирования */
  margin: 0;
}

.login {
  margin-left: auto;     /* Перемещаем блок навигации максимально вправо */
  font-size: 25px;
  display: flex;
  align-items: center;
}

.login > * {
  margin-left: 20px;
}


</style>


