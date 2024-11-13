import { defineStore } from "pinia";

export const useTransactionsHistory = defineStore("transactionsHistoryStore", {
  state: () => ({
    history: [],
  }),
  actions: {
    async getHistory() {
      try {
        const res = await fetch(`http://localhost:3000/accountTransactions`);
        this.history = await res.json();
        console.log(this.history);
      } catch (e) {
        console.log(e);
      }
    },
  },
});
