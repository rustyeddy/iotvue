<script setup>
  const props = defineProps([
    'station',
  ])
</script>

<template>
  <div class="col-4">
    <h3>{{ station.station }}</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="(tss, sens) in station.sensors">
        <span class="bold">{{sens}}</span>: <span class="italic">{{ tss[tss.length - 1].value }}</span>
        <p>historic values: {{ tss.length }}</p>
      </li>
    </ul>
  </div>
</template>
