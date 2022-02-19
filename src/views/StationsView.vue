<script setup>
  import { reactive } from 'vue'
  import Station from '@/components/Station.vue'
  import { useStationStore } from '@/stores/stations'

  const stations = useStationStore()
</script>

<template>
  <div class="stations container">
    <div class="row m-4 p-4">
      <div class="col-3">
        <h1>Stations</h1>
        <ul class="list-group">
          <li class="list-group-item-fluid" v-for="station in stations.getStations" :key="station">
            {{ station.station }}
          </li>
        </ul> 
      </div>
      <div class="col">
        <div class="row">
          <Station v-for="station in stations.getStations" :station="station" />
        </div>
      </div>
    </div>
  </div>
</template>
