<template>
  <div>
    Hello, this is {{name}}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let name = ref<string>('MyComponent')
</script>