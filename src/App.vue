<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'
  import { defineComponent } from 'vue'
  import { useStationStore } from '@/stores/stations'

  const store = useStationStore()

  console.log("Starting connection to WebSocket Server")
  const connection = new WebSocket("ws://10.11.1.11:8011/ws")
  connection.onmessage = function(event) {
    const obj = JSON.parse(event.data)
    if (! obj.station) {
      return
    }
    console.log(obj)
    const store = useStationStore()
    store.$patch((state) => {
      const ts = { 
        timestamp: obj.time, 
        value: obj.value
      }
      const stid = obj.station
      const sensid = obj.sensor

      let st = state.stations[stid]
      if (!st) {
        st = {
          station: stid,
          sensors: {}
        }
        st.sensors[sensid] = [ ts ]
        state.stations[stid] = st
        return
      }

      if (!st.sensors) {
        st.sensors = {}
      }

      // We have a station, look for the sensor
      let sensor = st.sensors[sensid]
      if (!sensor) {
        sensor = []
        st.sensors[sensid] = sensor
      }
      sensor.push(ts)
    })
  }

  connection.onopen = function(event) {
    console.log(event)
    console.log("Successfully connected to the echo websocket server...")
  }
</script>

<template>
  <header class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav navbar-expand-lg navbar-light bg-light">
            <RouterLink class='nav-link' to="/">Home</RouterLink>
            <RouterLink class='nav-link' to="/stations">Stations</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header> 

  <RouterView />
  
</template>


<style>
</style>
