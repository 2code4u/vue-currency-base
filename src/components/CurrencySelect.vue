<template>
  <label class="pb-4">Выберите валюту</label>
  <vue-multiselect
    v-model="selectedCurrency"
    :options="optionsCurrency"
    @select="chooseBaseCurrent"
    @remove="chooseBaseCurrent({})"
    placeholder="Поиск..."
    label="name"
    track-by="name" 
    >
  </vue-multiselect>
</template>
<script>
import VueMultiselect  from 'vue-multiselect'
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  components: {
    VueMultiselect
  },
  data () {
    return {
      selectedCurrency: {}
    }
  },
  computed: {
    ...mapState([
      'baseCurrent'
    ]),

    ...mapGetters([
      'optionsCurrency'
    ])
  },
  methods: {
    ...mapActions([
      'chooseBaseCurrent'
    ])
  }
}
</script>