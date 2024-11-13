<template>
  <div class="d-flex column container-fluid justify-content-between p-0 my-3">
    <div class="d-flex column">
      <div class="d-flex align-items-center">
        <img
          src="../assets/bandeira-us.svg"
          alt="bandeira-americana"
          style="height: 32px"
        />
      </div>
      <div class="ms-2">
        <div class="fw-bold value">USD 1.000,00</div>
        <div class="type">Transferência pix</div>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <span class="btn btn-success p-0 flow px-1"> Recebimento </span>
    </div>
    <div class="status d-flex align-items-center fw-bold">Aprovada</div>
  </div>
</template>

<script>
export default {
  name: "Transacao",
};
</script>

<style scoped>
.value {
  font-size: 0.7em;
}
.type {
  font-size: 0.6em;
}

.flow {
  font-size: 0.7em;
  border: 0px;
  background-color: #25d366;
}
.status {
  font-size: 0.7em;
}
</style>
