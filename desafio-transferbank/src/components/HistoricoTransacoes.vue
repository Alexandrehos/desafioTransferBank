<template>
  <div>
    <ul class="list-group list-group-flush">
      <li
        v-for="transaction in transactions"
        class="list-group-item bg-light p-0 my-1"
      >
        <Transacao />
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

export default {
  name: "HistoricoTransacoes",
  components: { Transacao },
  setup() {
    let transactions = ref([1, 2, 3]);
    return { transactions };
  },
};
</script>
