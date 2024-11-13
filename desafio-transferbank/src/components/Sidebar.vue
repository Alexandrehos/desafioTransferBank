<template>
  <div class="d-flex row align-content-between h-100">
    <div>
      <ul class="nav nav-pills flex-column mb-auto">
        <li v-for="option in sidebarOptions" :key="option.name">
          <SidebarOption :option="option" />
        </li>
      </ul>
    </div>

    <div
      class="m-2 p-3 text-light d-flex justify-content-between flex-shrink-1 border-radius-default"
      style="background-color: #25d366"
    >
      <div><i class="bi bi-whatsapp me-2"></i>Ajuda</div>
      <i class="bi bi-arrow-right me-2"></i>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SidebarOption from "./SidebarOption.vue";

export default {
  name: "Sidebar",
  components: { SidebarOption },
  setup() {
    const sidebarOptions = ref([
      { name: "Gerar QR Code", icon: "bi bi-qr-code", isSelected: true },
      { name: "Extrato", icon: "bi bi-card-list", isSelected: false },
      { name: "Saque", icon: "bi bi-cash-coin", isSelected: false },
      { name: "Clientes", icon: "bi bi-person", isSelected: false },
      { name: "Acessos", icon: "bi bi-key", isSelected: false },
      { name: "Contas", icon: "bi bi-bank", isSelected: false },
    ]);
    return { sidebarOptions };
  },
};
</script>
