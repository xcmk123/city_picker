export const removeCity = (state, id) => {
  const indexOfCity = CITYS.findIndex(city => city.id === id)
  const result = [
    ...state.CITYS.slice(0, indexOfCity),
    {
      ...state.CITYS[indexOfCity],
      isChecked: !state.CITYS[indexOfCity].isChecked
    },
    ...state.CITYS.slice(indexOfCity + 1),
  ]
  state.CITYS = result
  state.cacheAllSelectedCity = result
}