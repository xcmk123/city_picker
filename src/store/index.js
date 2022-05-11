import { createStore } from 'vuex'
import { CITYS } from '@/constant'
import { MUTAION, GETTERS } from './constant'
const store = createStore({
  state() {
    return {
      cacheAllCity: [...CITYS],
      allCity: [...CITYS],
    }
  },
  mutations: {
    [ MUTAION.SUMBIT_SELECT_CITY ] (state, payload) {
      state.cacheAllCity = [...state.allCity]
      payload.method()
    },
    [ MUTAION.CLOSE_SELECT_CITY ] (state, payload) {
      return state.allCity = [...state.cacheAllCity]
      payload.method()
    },
    [ MUTAION.REMOVE_SELECTED_CITY ] (state, id) {
      const { allCity } = state
      const indexOfCity = CITYS.findIndex(city => city.id === id)
      const result = [
        ...allCity.slice(0, indexOfCity),
        {
          ...allCity[indexOfCity],
          isChecked: !allCity[indexOfCity].isChecked
        },
        ...allCity.slice(indexOfCity + 1),
      ]
      state.allCity = result
      state.cacheAllCity = result
    },
    [ MUTAION.SELECT_CITY ] (state, payload) {
      console.log(payload)
      const { allCity } = state
      const indexOfCity = CITYS.findIndex(city => city.id === payload.id)
      const result = [
        ...allCity.slice(0, indexOfCity),
        {
          ...allCity[indexOfCity],
          isChecked: !allCity[indexOfCity].isChecked
        },
        ...allCity.slice(indexOfCity + 1),
      ]
      state.allCity = result
    }
  },
  getters: {
    [ GETTERS.ALL_SELECTED_CITY]: (state) => {
      return state.allCity.filter(city => city.isChecked)
    },
    [ GETTERS.iS_AT_LEAST_ONE_CITY_HAD_SELECTED ]: (state) => {
      return state.allCity.some(city => city.isChecked)
    }
  }
})
export default store