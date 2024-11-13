<template>
  <Navbar />
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-2 h-100"><Sidebar /></div>
      <div class="col-10"><Main /></div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Main from "@/components/Main.vue";
import { useCoinConversion } from "../stores/CoinConversionStore";

export default {
  name: "HomeView",
  components: { Navbar, Sidebar, Main },
  setup() {
    const coinConversion = useCoinConversion();

    coinConversion.getConversion();
    setInterval(() => {
      coinConversion.getConversion();
    }, 30000);
    return { coinConversion };
  },
};
</script>
