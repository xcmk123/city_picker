<template>
  <label class="checkbox" :for="title" @click="onClickItem(id)">
    <input 
      class="checkbox__input" 
      type="checkbox" 
      :name="id"
      :checked="isChecked"
    />
    <div class="checkbox__box"></div>
    {{ title }}
  </label>
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
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClickItem(id) {
      this.$emit('onChangeValue', id)
    } 
  }
}
</script>

<style lang="scss" scoped>
  .checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 40px;
    padding: 11px 19px;
    box-sizing: border-box;
    transition: all 150ms ease-in;
    &:hover {
      background-color: rgb(231, 241, 253);
    }
  }
  .checkbox__input {
    display: none;
  }
  .checkbox__box {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: 2px solid #cccccc;
    background-color: #FFFFFF;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    flex-shrink: 0;
    transition: all 150ms ease-in;
  }
  .checkbox__box::after {
    content: '\2714';
    color: #FFFFFF;
    transform: scale(0);
    transition: transform 150ms ease-in;
  }
  .checkbox__input:checked + .checkbox__box {
    background: #45D1C9;
    border-color: #45D1C9;
  }
  .checkbox__input:checked + .checkbox__box::after {
    transform: scale(0.7);
  }
</style>