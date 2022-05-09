<template>
  <button 
    class="btn" 
    :class="{
      'btn-icon': singleIcon,
      'btn--fullWidth': fullWidth,
      'btn--filled--primary': primary,
      'btn--default': text,
      'f-12': fontSizeSmall,
      'btn--disable': disable,
      'btn--color--primary': textPrimary
    }"
    @click="onClick" 
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    fullWidth: Boolean,
    singleIcon: Boolean,
    primary: Boolean,
    text: Boolean,
    fontSizeSmall: Boolean,
    disable: Boolean,
    textPrimary: Boolean,
    textAlignCenter: Boolean
  },
  methods: {
    onClick() {
      this.$emit('onClickEvent')
    } 
  } 
}
</script>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .btn {
    background: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    height: 32px;
    line-height: 20px;
    padding: 5px 19px;
    box-sizing: border-box;
    width: 104px;
    transition: 0.15s ease-in;
    vertical-align: middle;
    white-space: nowrap;
    @include font-apple;
  }
  .btn--default {
    font-weight: 500;
    width: 82px;
  }
  .btn--disable {
    background-color: #DCDCDC;
    color: #FFFFFF;
    cursor: not-allowed;
  }
  .btn--menu {
    width: 100%;
    border-radius: 0;
    &:hover {
      background-color: $--color-btn-default-hover;
    }
  }
  .btn-icon {
    padding: 5px 8px;
    border-radius: 16px;
    &:hover {
      background: none;
    }
  }
  .btn--align--center {
    justify-content: center;
  }
  .btn--fullWidth {
    width: 100%;
  }
  .btn--color--primary {
    color: #007BC3;
  }
  .btn--filled--primary {
    background-color: $--color-btn-primary;
    color: #FFFFFF;
  }
  .f-12 {
    font-size: 12px;
  }
</style>