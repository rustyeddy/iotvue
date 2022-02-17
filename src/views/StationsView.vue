<script setup>
  import { reactive } from 'vue'
  import Station from '@/components/Station.vue'
  import { useStationStore } from '@/stores/stations'

  const stations = useStationStore()
</script>

<template>
  <div class="stations container">
    <div class="row m-4 p-4">
	<h1>Stations View</h1>
    </div>
    <div class="row m-4 p-4">
      <Station v-for="station in stations.getStations" :station="station" />
    </div>
  </div>
</template>
