import { createStore } from 'vuex'
import { CITYS } from '@/constant'
const store = createStore({
  state() {
    return {
      cacheAllCity: [],
      allCity: [...CITYS],
    }
  },
  mutations: {
    submitSelectCity(state) {
      state.cacheAllCity = [...state.allCity]
    },
    closeSelectCity(state) {
      state.allCity = [...state.cacheAllCity]
    },
    removeSelectedCity(state, id) {
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
    selectCity(state, id) {
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
    }
  }
})
export default store