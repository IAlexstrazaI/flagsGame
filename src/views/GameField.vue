<script setup>
defineProps({
  msg: {
    type: String,
    required: false,
    default: 'Поле для игры тут!',
  },
})
</script>

<template>
  <div class="greetings">
    <h3>{{ msg }}</h3>
  </div>
</template>
