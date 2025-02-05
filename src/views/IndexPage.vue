<script setup>
defineProps({
  msg: {
    type: String,
    required: false,
    default: 'Индексная страница',
  },
})
</script>

<template>
  <main>
    <h3>{{ msg }}</h3>
  </main>
</template>
