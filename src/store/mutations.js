import store from ".";

export const submitSelectCity = (method) => {
  store.commit('submitSelectCity')
  method()
}

export const removeSelectedCity = (id) => {
  store.commit('removeSelectedCity', id)
}

export const selectCity = (id) => {
  store.commit('selectCity', id)
}

export const closeSelectCity = (method) => {
  store.commit('closeSelectCity')
  method()
}