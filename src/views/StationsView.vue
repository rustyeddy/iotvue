<script setup>
  import { reactive } from 'vue'
  import Station from '@/components/Station.vue'

  const state = reactive({
    stations: [
      {
        id: "10.11.1.33", 
        sensors: {
          tempf: 78.8,
          humidity: 12.2,
          moisture: 3.9,
          luminence: 88.5,
        }
      },
      {
        id: "10.11.2.11",
        sensors: {
          tempf: 72.9,
          humidity: 19.1,
          moisture: 5.19,
          luminence: 82.15,

        }
      }
    ]
  })
</script>

<template>
  <div class="stations container">
    <div class="row m-4 p-4">
      <Station v-for="station in state.stations" :station="station" />
    </div>
  </div>
</template>
