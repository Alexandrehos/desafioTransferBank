<template>
  <div>
    <ul class="list-group list-group-flush">
      <li
        v-for="transaction in lastTransactions"
        class="list-group-item bg-light p-0 my-1"
      >
        <Transacao :transaction="transaction" />
      </li>
    </ul>
  </div>
  <div class="container-fluid d-class justify-content-center mt-3">
    <a
      href=""
      class="fw-bold mb-2 mt-3"
      style="text-align: center; color: black; display: block; font-size: 0.8em"
      >Ver todas</a
    >
  </div>
</template>

<script>
import { ref } from "vue";
import Transacao from "./Transacao.vue";
import { useTransactionsHistory } from "../stores/TransactionsHistory";

export default {
  name: "HistoricoTransacoes",
  components: { Transacao },
  setup() {
    const transactionsHistory = useTransactionsHistory();
    const lastTransactions = ref([]);

    transactionsHistory.getHistory();

    transactionsHistory.$subscribe((history) => {
      lastTransactions.value = transactionsHistory.history.slice(-3).reverse();
    });

    return { lastTransactions, transactionsHistory };
  },
};
</script>
