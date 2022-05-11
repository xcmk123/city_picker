<template>
  <SelectInput placeholder="Chọn tỉnh thành">
    <template v-slot:option="{ isOpen, onToggle }">
      <div v-if="isOpen" class="select_menu_container">
        <div class="list_item_container">
          <Checkbox
            v-for="city of allCity"
            :title="city.name"
            :key="city.id"
            :id="city.id"
            :isChecked="city.isChecked"
            @onChangeValue="[ MUTAION.SELECT_CITY ]({ id })"
          />
        </div>
        <div class="group_button">
          <Button
            @onClickEvent="handleSubmitCity(onToggle)"
            :disable="!isAtLeastOneCityHadSelected"
            :primary="isAtLeastOneCityHadSelected"
          >
            Đồng ý
          </Button>
          <Button @onClickEvent="[MUTAION.CLOSE_SELECT_CITY](onToggle)" text textPrimary>
            Huỷ
          </Button>
        </div>
      </div>
    </template>
  </SelectInput>
  <div class="group_chip_container">
    <Chip
      v-for="city of allSelectedCity"
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
import { mapGetters, mapMutations, mapState } from "vuex";
import { STATE, GETTERS, MUTAION } from '@/store/constant'
export default {
  data() {
    return {
      MUTAION: MUTAION
    }
  },
  components: {
    SelectInput,
    Checkbox,
    Button,
    Chip,
  },
  methods: {
    ...mapMutations(
      [ MUTAION.SUMBIT_SELECT_CITY ],
      [ MUTAION.CLOSE_SELECT_CITY ],
      [ MUTAION.REMOVE_SELECTED_CITY ],
      [ MUTAION.SELECT_CITY ],
    ),
  },
  computed: {
    ...mapState([
      STATE.ALL_CITY
    ]),
    ...mapGetters([
      GETTERS.ALL_SELECTED_CITY,
      GETTERS.iS_AT_LEAST_ONE_CITY_HAD_SELECTED
    ])
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
