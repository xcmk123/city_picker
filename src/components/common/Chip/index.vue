<template>
  <div class="chip_container">
    <div class="chip_content">
      {{ title }}
    </div>
    <div @click="onClick(id)">
      <img 
        :src="close_icon"
        alt="close_icon"
      />
    </div>
  </div>
</template>

<script>
import close_icon from '@/assets/icons/close_icon.png'
export default {
  data() {
    return {
      close_icon: close_icon
    }
  },
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
  }
</style>