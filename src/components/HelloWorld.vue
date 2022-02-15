<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
        You are running the Sensor Station Hub!
        <a target="_blank" href="https://rustyeddy.com/sensors/">Sensor Station</a> Hub
    </h3>
  </div>

  <div class="stations">  
    <h1 class="stations">Stations</h1>
    <ul>
      <li>10.13.11.11</li>
      <li>10.13.11.12</li>
      <li>10.13.11.13</li>  
    </ul>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
