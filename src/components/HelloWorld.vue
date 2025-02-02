<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
    default: "Привет!",
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      left part is the component called 

    </h3>
  </div>
</template>

