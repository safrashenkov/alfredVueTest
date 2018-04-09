<template>
    <full-calendar></full-calendar>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
    @import '~fullcalendar/dist/fullcalendar.css';
</style>