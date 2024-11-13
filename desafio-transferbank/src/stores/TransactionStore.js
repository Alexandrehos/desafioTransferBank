import { defineStore } from "pinia";

export const useTransaction = defineStore("transactionStore", {
  state: () => ({
    state: "waiting",
    clientName: "",
    clientCPF: "",
    clientPhone: "",
    dolarValue: "",
    dolarVETValue: "",
    finalOrderValue: "",
    finalOrderValueClient: "",
    orderPaymentConfirmation: false,
  }),
  getters: {
    getState() {
      return this.state;
    },
    getTransactionData() {
      return {
        clientName: this.clientName,
        clientCPF: this.clientCPF,
        clientPhone: this.clientPhone,
        dolarValue: this.dolarValue,
        dolarVETValue: this.dolarVETValue,
        finalOrderValue: this.finalOrderValue,
        finalOrderValueClient: this.finalOrderValueClient,
      };
    },
  },
  actions: {
    createTransactionOrder(transactionData) {
      this.state = transactionData.state;
      this.clientName = transactionData.clientName;
      this.clientCPF = transactionData.clientCPF;
      this.clientPhone = transactionData.clientPhone;
      this.dolarValue = transactionData.dolarValue;
      this.dolarVETValue = transactionData.dolarVETValue;
      this.finalOrderValue = transactionData.finalOrderValue;
      this.finalOrderValueClient = transactionData.finalOrderValueClient;
    },
    async confirmPayment() {
      try {
        const res = await fetch(`http://localhost:3000/accountTransactions`, {
          method: "POST",
          body: JSON.stringify(this.getTransactionData),
          headers: { "Content-Type": "application/json" },
        });
        this.orderPaymentConfirmation = true;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
