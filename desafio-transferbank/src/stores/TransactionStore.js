import { defineStore } from "pinia";
import { useTransactionsHistory } from "./TransactionsHistory";

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
    type: "",
    flow: "",
    status: "",
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
        type: this.type,
        flow: this.flow,
        status: "Ok",
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
      this.flow = transactionData.flow;
      this.status = transactionData.status;
    },
    async confirmPayment() {
      const transactionsHistory = useTransactionsHistory();
      try {
        const res = await fetch(`http://localhost:3000/accountTransactions`, {
          method: "POST",
          body: JSON.stringify(this.getTransactionData),
          headers: { "Content-Type": "application/json" },
        });
        transactionsHistory.getHistory();
        this.orderPaymentConfirmation = true;
      } catch (e) {
        console.log(e);
      }
    },
    resetOrderConfirmation() {
      this.orderPaymentConfirmation = false;
    },
  },
});
