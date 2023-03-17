<script lang="ts" setup>
import {NavigationMenu}from '@m/components'
import {RouterView} from 'vue-router'

</script>

<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo"/>
      <NavigationMenu/>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
        <RouterView/>
    </a-layout-content>
  </a-layout>
</template>

<style>
</style>
