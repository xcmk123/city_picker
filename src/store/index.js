import { createStore } from 'vuex'
import { CITYS } from '@/constant'
import { MUTATION, GETTERS } from './constant'
const store = createStore({
  state() {
    return {
      cacheAllCity: [...CITYS],
      allCity: [...CITYS],
    }
  },
  mutations: {
    [ MUTATION.SUBMIT_SELECT_CITY ] (state, payload) {
      state.cacheAllCity = [...state.allCity]
      return payload.method()
    },
    [ MUTATION.CLOSE_SELECT_CITY ] (state, payload) {
      state.allCity = [...state.cacheAllCity]
      return payload.method()
    },
    [ MUTATION.REMOVE_SELECTED_CITY ] (state, payload) {
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
      state.cacheAllCity = result
    },
    [ MUTATION.SELECT_CITY ] (state, payload) {
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