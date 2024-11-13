import { defineStore } from "pinia";

export const useCoinConversion = defineStore("coinConversionStore", {
  state: () => ({
    coinin: "BRL",
    coinout: "USD",
    ratio: "----",
    variation: "--",
  }),
  actions: {
    async getConversion() {
      try {
        const res = await fetch(
          `https://economia.awesomeapi.com.br/json/last/${this.coinout}-${this.coinin}`
        );
        const data = await res.json();
        this.ratio = (data.USDBRL.bid + "0000").slice(0, 6);
        this.variation = data.USDBRL.pctChange;
      } catch (e) {
        this.ratio = "----";
        this.variation = "--";
      }
    },
  },
});
