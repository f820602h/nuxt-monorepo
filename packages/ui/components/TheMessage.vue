<script setup>
import { message } from "~ui/constants/message";

defineProps({
  text: {
    type: String,
    default: message,
  },
});
</script>

<template>
  <div>Component from ui / {{ text }}</div>
</template>
