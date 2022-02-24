import { createStore } from "vuex";

export default createStore({
  state: {
    currencyData: null,
    baseCurrent: {}
  },
  mutations: {
    setCurrencyData (state, payload) {
      state.currencyData = payload
    },
    setBaseCurrent (state, payload) {
      state.baseCurrent = payload
    }
  },
  actions: {
    async loadCurrencyData ({commit}) {
      await fetch(`/api/currency`, {
        method: 'GET',
        headers: new Headers(
          { 
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json'
          }),
        })
        .then(res => res.json())
        .then(result => {
          commit('setCurrencyData', result)
        })
    },
    chooseBaseCurrent ({commit}, payload) {
      commit('setBaseCurrent', payload)
    }
  },
  getters: {
    isCurrencyDataResult (state) {
      return state.currencyData?.Valute ? true : false
    },
    optionsCurrency (state, getters) {
      if (getters.isCurrencyDataResult) {
        let charCodes = Object.keys(state.currencyData?.Valute)

        charCodes =  charCodes.map(el => {
          let currencyValue = state.currencyData?.Valute[el]
          if (currencyValue) {
            return {name: `${el} - ${currencyValue.Name}`, value: currencyValue}
          }
          })
        return charCodes
      }
      return []
    }
  },
  modules: {},
})
