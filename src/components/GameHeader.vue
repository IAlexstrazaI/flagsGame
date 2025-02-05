<script setup>
defineProps({
  msg: {
    type: String,
    required: false,
    default: 'Хедер',
  },
})
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <router-link to="/">Перейти к Индекс</router-link>
    <router-link to="/gamefield">Перейти к поле игры</router-link>
    <router-link to="/countrytable">Перейти к алминской таблице</router-link>
  </div>
</template>
