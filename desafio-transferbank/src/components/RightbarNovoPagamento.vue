<template>
  <div
    class="bg-light d-flex align-items-start row border-radius-default ms-4 me-1 p-3"
    style=""
  >
    <div
      class="d-flex justify-content-center"
      v-if="transaction.state === 'payment'"
      @click="transaction.confirmPayment"
    >
      <img
        src="../assets/qrcode.png"
        alt=""
        class="p-3 border-radius-default mb-1"
        style="background-color: white; width: 295px"
      />
    </div>

    <div class="d-flex justify-content-center qrCodeImage" v-else>
      <img
        src="../assets/qrcode.png"
        alt=""
        class="p-3 border-radius-default mb-1"
        style="background-color: white; width: 295px; filter: opacity(10%)"
      />
      <div class="fw-bold qrCodeText fs-5">Aguardando novo pagamento</div>
    </div>

    <div class="mt-3">
      <div v-if="!timerOut">
        <ProgressBar :timer="10000" @timeOut="timeOut" />
      </div>
      <div
        v-else
        class="container-fluid d-flex justify-content-center fw-bold text-center"
        style="font-size: 0.7em"
      >
        Verificando pagamento junto ao banco...
      </div>
    </div>
    <div class="mt-3">
      <h6 class="mt-2">Últimas operações realizadas</h6>
      <div>
        <HistoricoTransacoes />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ProgressBar from "./ProgressBar.vue";
import HistoricoTransacoes from "./HistoricoTransacoes.vue";

import { useTransaction } from "../stores/TransactionStore";

export default {
  name: "RightbarNovoPagamento",
  components: { ProgressBar, HistoricoTransacoes },
  setup() {
    const transaction = useTransaction();
    let timerOut = ref(false);

    const timeOut = () => {
      timerOut.value = true;
    };

    transaction.$subscribe((state) => {
      if (transaction.getState === "waiting") {
        timerOut.value = false;
      }
    });

    return { timerOut, timeOut, transaction };
  },
};
</script>

<style>
.qrCodeImage {
  position: relative;
}
.qrCodeText {
  position: absolute;
  text-align: center;
  top: 40%;
  width: 80%;
}
</style>
