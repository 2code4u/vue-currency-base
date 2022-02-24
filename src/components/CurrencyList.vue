<template>
    <h1>Список валют</h1>
    <div
      v-if="isCurrencyDataResult"
      class="container-md w-50 py-3 currency-block"
    >
      <CurrencySelect />
      <CurrencyCompare />
    </div>
</template>
<script>
import CurrencyCompare from "@/components/CurrencyCompare.vue"
import CurrencySelect from "@/components/CurrencySelect.vue"
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    CurrencySelect,
    CurrencyCompare 
  },
  mounted () {
    this.loadCurrency()
  },
  computed: {
    ...mapGetters([
      'isCurrencyDataResult',
    ])
  },
  methods: {
    ...mapActions({
      loadCurrency: 'loadCurrencyData',
    })
  }
}
</script>