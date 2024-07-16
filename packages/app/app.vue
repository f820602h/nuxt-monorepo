<script setup>
import { message } from "~ui/constants/message";
</script>

<template>
  <div>
    In App Workspace
    <div>Message: {{ message }}</div>
    <UiTheMessage />
    <JobTheMessage />
  </div>
</template>
