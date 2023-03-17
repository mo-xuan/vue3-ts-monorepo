<script setup lang="ts">
import {ref} from 'vue'
import {getTestApi} from '@m/apis'

const testData = ref({})

const getData = async () => {
  testData.value = await getTestApi()
}
getData()
</script>

<template>
  <main>
    homeData:
    {{ testData }}
  </main>
</template>
