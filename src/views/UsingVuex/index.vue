<template>
  <SelectInput placeholder="Chọn tỉnh thành">
    <template v-slot:option="{ isOpen, onToggle }">
      <div v-if="isOpen" class="select_menu_container">
        <div class="list_item_container">
          <Checkbox
            v-for="city of allCityState"
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
            :disable="isDisable"
            :primary="!isDisable"
          >
            Đồng ý
          </Button>
          <Button @onClickEvent="handleCloseSelectCity(onToggle)" text textPrimary>
            Huỷ
          </Button>
        </div>
      </div>
    </template>
  </SelectInput>
  <div class="group_chip_container">
    <Chip
      v-for="city of allSelectedCityState"
      :title="city.name"
      :key="city.id"
      :id="city.id"
      @onClickRemove="handleRemoveSelectedCity"
    />
  </div>
</template>

<script>
import SelectInput from "@/components/common/SelectInput/index.vue";
import Checkbox from "@/components/common/Checkbox/index.vue";
import Button from "@/components/common/Button/index.vue";
import Chip from "@/components/common/Chip/index.vue";
import { mapState } from "vuex";
import { 
  submitSelectCity, 
  closeSelectCity, 
  selectCity,
  removeSelectedCity
} from "@/store/mutations";
export default {
  components: {
    SelectInput,
    Checkbox,
    Button,
    Chip,
  },
  methods: {
    handleSubmitCity(method) {
      submitSelectCity(method)
    },
    handleCloseSelectCity(method) {
      closeSelectCity(method)
    },
    handleRemoveSelectedCity(id) { 
      removeSelectedCity(id)
    },
    handleSelectCity(id) {
      selectCity(id)
    }
  },
  computed: {
    ...mapState({
      allCity: state => state.allCity,
      allCityState: 'allCity',
    }),
    ...mapState({
      isDisable: false,
      isAtLeastOneCityHadSelected (state) {
        return state.allCity.some(city => city.isChecked )
      } 
    }),
    ...mapState({
      allCity: state => state.allCity,
      allSelectedCityState: 'allCity',
      filterAllSelectedCity (state) {
        console.log(state)
        return state.allCity.filter(city => city.isChecked )
      } 
    })
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
    cursor: pointer;
    margin-top: 15px;
  }
</style>
