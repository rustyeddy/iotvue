<script setup>
  const props = defineProps([
    'station',
  ])
</script>

<template>
  <div class="col">
    <h2>Station {{ station.id }}</h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="(val, sens) in station.sensors" :key="val">{{ sens }} : {{ val }}</li>
    </ul>
  </div>

</template>
