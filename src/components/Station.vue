<script setup>
  const props = defineProps([
    'station',
  ])
</script>

<template>
  <div class="col-3">
    <p>Station {{ station }}</p>
  </div>
</template>
