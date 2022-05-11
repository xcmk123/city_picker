<template>
  <div class="select_input_container">
    <input 
      class="form-control" 
      @focus="handleOpenSelect"
      :placeholder="placeholder"
      :name="name"
      :value="value" 
      :disabled="disabled"
      readonly
    />
    <div class="select_arrow">
      <img :src="drop_menu_icon" alt="drop_menu_icon" />
    </div>
    <div class="select_items">
      <slot 
        name="option" 
        :isOpen="isOpen" 
        :onToggle="handleOpenSelect"
      >
      </slot>
    </div>
  </div>
</template>

<script>
import drop_menu_icon from '@/assets/icons/drop_menu_icon.png'
export default {
  data() {
    return {
      drop_menu_icon: drop_menu_icon,
      isOpen: false
    }
  },
  props: {
    value: String,
    name: String,
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean, 
      default: false
    },
  },
  methods: {
    handleOpenSelect() {
      this.isOpen = !this.isOpen
    },
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .select_input_container {
    position: relative;
    width: inherit;
    .form-control {
      @include font-apple;
      padding: 5px 12px;
      line-height: 20px;
      vertical-align: middle;
      border-radius: 6px;
      outline: none;
      border: 1px solid #999999;
      transition: 150ms ease-in;
      width: 100%;
      height: 48px;
      box-sizing: border-box;
      &:focus {
        border-color: rgba(0, 123, 195, 0.32);
        box-shadow: 0px 0px 8px rgba(0, 123, 195, 0.32);
      }
    }
    .select_items {
      position: absolute;
      top: calc(100% + 2px);
      z-index: 1000;
      width: 100%;
      border-radius: 5px;
      overflow: auto;
      background-color: #FFFFFF;
      box-shadow: 0px 1px 4px rgba(102, 102, 102, 0.2);
    }
    .select_arrow {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      right: 16px;
      top: 50%;
      img {
        display: block;
      }
    }
    input:disabled {
      opacity: 0.65;
    }
  }
</style>