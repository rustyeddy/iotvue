<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Sensor Station 
    <a target="_blank" href="https://rustyeddy.com/sensors">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Project Components</template>

    This project consists of the following components:
    <a href="http://rustyeddy.com/sensors/wireless-sensors" target="_blank">Sensor Station for esp32</a>. 
    <a href="http://rustyeddy.com/sensors/hub" target="_blank">SS Hub</a>. The hub is the aggregator 
    of sensor station data and server of this page. Able to speak REST, MQTT and Websocket the Hub is
    built to share aggregated data in real-time and historically.
    <a href="http://rustyeddy.com/sensors/webapp" target="_blank">This Webapp</a> and
    <a href="http://rustyeddy.com/sensors/cloud" target="_blank">Sensor Cloud Project</a>.

    <br />

    Instructions on build and running a sensor station infrastrutre can be found in the <code>README.md</code> 
    files of the respective respositories. All repositories are OpenSource and Served by Github.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Tech Ecosystem</template>

    The ecosystem or more specifically the technologies involved in this project are intended to be lean and fast.

    <a target="_blank" href="https://golang.org/">Go</a> backend,
    <a target="_blank" href="https://vuejs.org/">Vue</a> reative front end,
    <a target="_blank" href="https://espressif.com/esp32/">esp32 IoT chip</a> and the c++ FreeRTOS SDK.
    <a target="_blank" href="https://cloud.google.com/">Google Cloud</a> For online access
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a target="_blank" href="https://chat.sensorstation.net">Sensor Station Chat</a>, our official Discord server, or
    <a target="_blank" href="https://stackoverflow.com/questions/tagged/vue.js">StackOverflow</a>.
    You should also subscribe to
    <a target="_blank" href="https://news.sensorstation.org">our mailing list</a> and follow the official
    <a target="_blank" href="https://twitter.com/vuejs">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Sensor Station</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a target="_blank" href="https://sensorstation.net/sponsor/">becoming a sponsor</a>.
  </WelcomeItem>
</template>
