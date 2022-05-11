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
            @onChangeValue="selectCity({ id: city.id })"
          />
        </div>
        <div class="group_button">
          <Button
            @onClickEvent="submitSelectCity({ method: onToggle })"
            :disable="!isAtLeastOneCityHadSelected"
            :primary="isAtLeastOneCityHadSelected"
          >
            Đồng ý
          </Button>
          <Button @onClickEvent="closeSelectCity({ method: onToggle })" text textPrimary>
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
      @onClickRemove="removeSelectedCity({ id: city.id })"
    />
  </div>
</template>

<script>
import SelectInput from "@/components/common/SelectInput/index.vue";
import Checkbox from "@/components/common/Checkbox/index.vue";
import Button from "@/components/common/Button/index.vue";
import Chip from "@/components/common/Chip/index.vue";
import { mapGetters, mapMutations, mapState } from "vuex";
import { STATE, GETTERS, MUTATION } from '@/store/constant'
export default {
  created() {
    this.MUTATION = MUTATION
  },
  components: {
    SelectInput,
    Checkbox,
    Button,
    Chip,
  },
  methods: {
    ...mapMutations([ 
      MUTATION.SUBMIT_SELECT_CITY ,
      MUTATION.CLOSE_SELECT_CITY,
      MUTATION.REMOVE_SELECTED_CITY,
      MUTATION.SELECT_CITY,
    ]),
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
  @import "@/assets/variables.scss";
  @include css-select
</style>
