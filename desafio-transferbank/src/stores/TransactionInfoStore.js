import { defineStore } from "pinia";
import { useCoinConversion } from "./CoinConversionStore";

export const useTransactionInfo = defineStore("transactioInfoStore", {
  state: () => ({
    transactionValueOriginal: 0,
  }),
  getters: {
    iofValue() {
      return 0.0038;
    },
    custoPercentual() {
      return 0.007;
    },
    transactionCharge() {
      return 10;
    },
    transactionChargeStr() {
      return (Math.round(this.transactionCharge * 100) / 100).toFixed(2);
    },
    custoPercentualStr() {
      return (Math.round(this.custoPercentual * 10000) / 100).toFixed(2);
    },
    iofAmount() {
      const coinConversion = useCoinConversion();
      //coinConversion.ratio
      if (this.transactionValueOriginal > 0) {
        console.log(this.iofValue);
        return (
          parseFloat(coinConversion.ratio * this.iofValue) *
          parseFloat(this.transactionValueOriginal)
        );
      }
      return "00,00";
    },
    iofAmountStr() {
      if (this.transactionValueOriginal > 0) {
        return (Math.round(this.iofAmount * 100) / 100).toFixed(2);
      }
      return "00,00";
    },
    dolarVETValue() {
      const coinConversion = useCoinConversion();
      return parseFloat(
        coinConversion.ratio * (1 + this.iofValue + this.custoPercentual)
      );
    },
    dolarVETValueStr() {
      console.log(this.dolarVETValue);
      return (Math.round(this.dolarVETValue * 10000) / 10000).toFixed(4);
    },
    transactionValueFinal() {
      return (
        this.transactionValueOriginal * this.dolarVETValue +
        this.transactionCharge * this.dolarVETValue
      );
    },
    transactionValueFinalStr() {
      if (this.transactionValueOriginal > 0) {
        return (Math.round(this.transactionValueFinal * 100) / 100).toFixed(2);
      }
      return "00,00";
    },
  },
  actions: {
    setTransactionValue(value) {
      this.transactionValueOriginal = parseFloat(value.value);
    },
  },
});
