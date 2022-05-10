<template>
  <div class="chip_container">
    <div class="chip_content">
      {{ title }}
    </div>
    <div 
      class="chip_close_icon" 
      @click="onClick(id)"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: null
    }
  },
  methods: {
    onClick(id) {
      this.$emit('onClickRemove', id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .chip_container {
    position: relative;
    display: inline-flex;
    background-color: #F8F8F8;
    height: 32px;
    gap: 10.5px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 4px 10px 4px 16px;
    border-radius: 32px;
    .chip_content {
      width: 100%;
      padding: 0 10px;
      text-align: center;
    }
    .chip_close_icon {
      &::after {
      content: "\00d7";
      transform: scale(1.2);
      }
    }
  }
</style>