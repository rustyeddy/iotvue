<script setup>
  const props = defineProps([
    'station',
  ])
</script>

<template>
  <div class="col-4">
    <div class="card mb-4">
      <h3 class="card-header">{{ station.station }}</h3>  
      <div class="card-text">
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(tss, sens) in station.sensors">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ sens }} : {{ tss[tss.length - 1].value }} </div>
              </div>
            <span class="badge bg-primary rounded-pill">{{ tss.length }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
