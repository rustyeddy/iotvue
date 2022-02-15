<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    stations: ['10.11.1.33', '10.11.1.34', '10.11.1.44', '10.11.1.54'],
    sensors: {
      "tempf": 78.8,
      "humidity": 12.2,
      "moisture": 3.9,
      "luminence": 88.5
    }
  })
</script>

<template>
  <div class="stations container">
    <div class="row">
      <div class="col">
        <h1>IoT Sensor Stations</h1>
      </div>
    </div>

    <div class="row m-4 p-4">
      <div class="col">
        <div class="d-flex align-items-start">
          <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">10.13.3.11</button>
            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">10.13.4.12</button>
            <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">10.13.3.13</button>
            <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">10.13.4.33</button>
          </div>

          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <p>{{ state.sensors }}</p>
            </div>
            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <p>{{ state.sensors }}</p>  
            </div>
            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <p>{{ state.sensors}} </p>
            </div>
            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              <p>{{ state.sensors }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
