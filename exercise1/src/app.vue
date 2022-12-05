<template>
  <div class="container">{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {
      title: 'vue sfc'
    };
  }
};
</script>

<style scoped>
.container {
  color: red;
}
</style>
