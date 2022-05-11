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
  @import "@/assets/variables.scss";
  @include css-select
</style>
