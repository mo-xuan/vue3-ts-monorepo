<script lang="ts" setup>
import {ref} from 'vue';
import {RouterLink} from 'vue-router'

const selectedKeys = ref<string[]>(['2'])
</script>

<template>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
  >
    <a-menu-item key="1">
      <RouterLink to="/">
        /
      </RouterLink>
    </a-menu-item>
    <a-menu-item key="2">
      <RouterLink to="/about">
        about
      </RouterLink>
    </a-menu-item>
  </a-menu>
</template>

<style scoped>

</style>
