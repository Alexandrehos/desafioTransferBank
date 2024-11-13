<template>
  <button
    class="container-fluid btn btn-primary mt-2 p-3"
    v-if="buttonState === 'generateQRCode'"
    @click="startChargeProccess"
  >
    Gerar QR code de pagamento
  </button>
  <button
    class="container-fluid btn btn-danger mt-2 p-3"
    @click="cancelChargeProccess"
    v-else
  >
    Cancelar pagamento
  </button>
</template>

<script>
export default {
  name: "BotaoPagamento",
  props: ["buttonState"],
  emits: ["startChargeProccess", "cancelChargeProccess"],
  setup(props, { emit }) {
    const startChargeProccess = () => {
      emit("startChargeProccess");
    };

    const cancelChargeProccess = () => {
      emit("cancelChargeProccess");
    };

    return { startChargeProccess, cancelChargeProccess };
  },
};
</script>

<style scoped>
button {
  font-size: 0.9em;
}
</style>
