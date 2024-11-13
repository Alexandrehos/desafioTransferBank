<template>
  <h1>Novo pagamento</h1>
  <div class="d-flex column mt-3">
    <div class="col-8">
      <InfosNovoPagamento />
      <div class="bg-light p-5 px-auto mt-3 border-radius-default"></div>
    </div>
    <div class="col-4">
      <RightbarNovoPagamento />
    </div>
  </div>
</template>

<script>
import ConfirmacaoDePagamentoModal from "./ConfirmacaoDePagamentoModal.vue";
import InfosNovoPagamento from "./InfosNovoPagamento.vue";
import RightbarNovoPagamento from "./RightbarNovoPagamento.vue";

export default {
  name: "NovoPagamento",
  components: {
    InfosNovoPagamento,
    RightbarNovoPagamento,
    ConfirmacaoDePagamentoModal,
  },
};
</script>
