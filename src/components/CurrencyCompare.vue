<template>
    <div v-if="isCorrectCurrency" class="cur-block container p-4 bg-light">
      <div class="text-start fs-5 fw-light">Текушая валюта</div>
      <div 
        @click="switchCurrency"
        class="inside-cur-block d-inline-flex fs-4 pt-4 px-3 w-100 justify-content-between"
      >
        <div v-if="baseView" class="view-block d-flex">
          <div class="px-2">{{ currentCurrency.Nominal }} {{ currentCurrency.CharCode }}</div>
          <div class="text-nowrap">-----</div>
          <div class="px-2">{{ currentCurrency.Value }} RUB</div>
        </div>
        <div v-else class="view-block d-flex">
          <div class="px-2">{{ currentCurrency.Nominal }} RUB</div>
          <div class="text-nowrap">-----</div>
          <div class="px-2">{{ switchedValue.toFixed(4) }} {{ currentCurrency.CharCode }}</div>
        </div>

        <div :class="[tendency >= 0 ? 'ascent' : 'descent']" class="tendency-el"> {{tendency.toFixed(4)}}</div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data () {
      return {
        baseView: true
      }
    },
    computed: {
      ...mapState ({
        currentCurrency: state => state.baseCurrent && state.baseCurrent.value
      }),
      isCorrectCurrency () {
        return Boolean(this.currentCurrency && this.currentCurrency.Nominal && this.currentCurrency.CharCode)
      },
      tendency () {
        if (this.isCorrectCurrency) {
          return (this.currentCurrency.Value - this.currentCurrency.Previous)
        }
        return 0
      },
      switchedValue () {
        if (!this.isCorrectCurrency) {
          return null
        }
        return ((this.currentCurrency.Nominal / this.currentCurrency.Value) * this.currentCurrency.Nominal)
      }
    },
    methods: {
      switchCurrency () {
        this.baseView = !this.baseView 
      }
    }
}
</script>
<style lang="scss" scoped>
.cur-block {
  height: 160px;
  min-width: 540px;
  margin-top: 40px;
  border-radius: 15px;
  color: cadetblue;
}
.inside-cur-block {
  position: relative;
  cursor: pointer;
  color: teal;
}
.view-block {
  max-width: 350px;
}
.ascent {
  color: limegreen;
}
.ascent::before {
  border-bottom: 15px solid;
}
.descent {
  color: orangered;
}
.descent::before {
  border-top: 15px solid;
}
.tendency-el::before {
  content: '';
  position: absolute;
  top: 54.8%;
  left: 75%;
  display: block;
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
}
</style>