<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
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
            <RouterLink class='nav-link' to="/about">About</RouterLink>
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
