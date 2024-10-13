<template>
  <div style="border: 1px solid yellow; min-width: 100%; min-height: 100%">

    <v-app style="border: 1px solid green">
      <v-app-bar app>
        <v-toolbar-title>Vite Vue3 App<br></v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link to="/">
          <v-btn variant="outlined">Host View</v-btn>
        </router-link>
        {{ '||' }}
        <router-link to="/remote-app">
          <v-btn variant="outlined">Remote App View</v-btn>
        </router-link>
        {{ '||' }}
        <router-link to="/host-info">
          <v-btn variant="outlined">Host Info View</v-btn>
        </router-link>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
</script>


<style>
@import '@mdi/font/css/materialdesignicons.min.css';
@import 'material-design-icons-iconfont/dist/material-design-icons.css';
</style>
