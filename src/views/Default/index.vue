<template>
  <SelectInput placeholder="Chọn tỉnh thành">
    <template v-slot:option="{ isOpen, onToggle }">
      <div v-if="isOpen" class="select_menu_container">
        <div class="list_item_container">
          <Checkbox
            v-for="city of CITYS"
            :title="city.name"
            :key="city.id"
            :id="city.id"
            :isChecked="city.isChecked"
            @onChangeValue="handleSelectCity"
          />
        </div>
        <div class="group_button">
          <Button
            @onClickEvent="handleSubmitCity(onToggle)"
            :disable="isAtLeastOneCitySelected"
            :primary="!isAtLeastOneCitySelected"
          >
            Đồng ý
          </Button>
          <Button @onClickEvent="handleCloseSelect(onToggle)" text textPrimary>
            Huỷ
          </Button>
        </div>
      </div>
    </template>
  </SelectInput>
  <div class="group_chip_container">
    <Chip
      v-for="city of selectedCitys"
      :title="city.name"
      :key="city.id"
      :id="city.id"
      @onClickRemove="handleRemoveCity"
    />
  </div>
</template>

<script>
import SelectInput from "@/components/common/SelectInput/index.vue";
import Checkbox from "@/components/common/Checkbox/index.vue";
import Button from "@/components/common/Button/index.vue";
import Chip from "@/components/common/Chip/index.vue";
import { CITYS } from "@/constant/index.js"
export default {
  data() {
    return {
      cacheSelectedCitys: [],
      CITYS: [...CITYS],
    }
  },
  components: {
    SelectInput,
    Checkbox,
    Button,
    Chip,
  },
  methods: {
    handleSubmitCity(method) {
      this.cacheSelectedCitys = [...this.CITYS]
      method()
    },
    handleCloseSelect(method) {
      this.CITYS = [...this.cacheSelectedCitys]
      method()
    },
    handleRemoveCity(id) {
      const indexOfCity = CITYS.findIndex(city => city.id === id)
      const result = [
        ...this.CITYS.slice(0, indexOfCity),
        {
          ...this.CITYS[indexOfCity],
          isChecked: !this.CITYS[indexOfCity].isChecked
        },
        ...this.CITYS.slice(indexOfCity + 1),
      ]
      this.CITYS = result
      this.cacheSelectedCitys = result
    },
    handleSelectCity(id) {
      const indexOfCity = CITYS.findIndex(city => city.id === id)
      const result = [
        ...this.CITYS.slice(0, indexOfCity),
        {
          ...this.CITYS[indexOfCity],
          isChecked: !this.CITYS[indexOfCity].isChecked
        },
        ...this.CITYS.slice(indexOfCity + 1),
      ]
      this.CITYS = result
    }
  },
  computed: {
    isAtLeastOneCitySelected() {
      return !this.CITYS.some(city => city.isChecked)
    },
    selectedCitys() {
      return this.CITYS.filter(city => city.isChecked)
    }
  }
};
</script>

<style lang="scss" scoped>
  .group_button {
    display: flex;
    gap: 10px;
    padding: 16px;
  }
  .select_menu_container {
    padding-top: 8px;
    .list_item_container {
      max-height: 300px;
      margin-right: 5px;
      overflow: auto;
    }
  }
  .wrapper {
    width: 450px;
  }
  .group_chip_container {
    display: flex;
    flex-wrap: wrap;
    width: inherit;
    min-height: 50px;
    gap: 4px;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid #999999;
    border-radius: 4px;
    margin-top: 15px;
    cursor: pointer;
  }
</style>
