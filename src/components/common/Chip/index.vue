<template>
  <div class="chip_container">
    <div class="chip_content">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .chip_container {
    width: 134px;
    height: 32px;
    background-color: #F8F8F8;
    position: relative;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 10px 4px 16px;
    border-radius: 32px;
    .chip_content {
      text-align: center;
      width: 100%;
    }
  }
  .chip_container::after {
    content: "\00d7";
    position: sticky;
    transform: scale(1.2);
  } 
</style>