import store from "../store"

export const getCacheAllSelectedCity = () => {
  return store.state.cacheAllCity
}

export const getAllCity = () => {
  return store.state.allCity
}