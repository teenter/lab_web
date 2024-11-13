<template>
    <div>
      <i>({{ item.id }})</i>
      <div>{{ item.Picture }}</div>
      <div>{{ item.CodeReg }} - {{ item.RegName }}</div>
      <div>Chief: {{ item.RegChief }}</div>
      <div>Type: {{ item.Type }}</div>
      <div>Year: {{ item.TypeYear }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterListElement',
    props: ['item'],
  };
  </script>
    