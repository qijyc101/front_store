<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: any;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const val = ref(null)

</script>

<style scoped lang="scss"></style>
