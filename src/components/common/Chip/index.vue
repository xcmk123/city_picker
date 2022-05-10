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
    .chip_close_icon {
      &::after {
      content: "\00d7";
      transform: scale(1.2);
      }
    }
  }
</style>