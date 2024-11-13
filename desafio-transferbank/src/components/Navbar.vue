<template>
  <nav class="navbar navbar-light mb-3">
    <div class="container-fluid column">
      <div class="col-2 g-0">
        <a class="" href="#">
          <img
            src="../assets/logo-transferbank-pay.png"
            alt="logo-transferbank"
            class="img-fluid"
          />
        </a>
      </div>
      <div
        class="col-10 p-3 d-flex justify-content-between text-light border-radius-default"
        style="background-color: black"
      >
        <div class="d-flex flex-row">
          <div class="ms-2 d-flex align-self-center">
            <img
              src="../assets/bandeira-us.svg"
              class="img-fluid rounded d-flex"
              style="height: 34px"
            />
          </div>
          <div class="ms-2">
            <div>
              <span class="fw-bold">{{ coinConversion.ratio }}</span> BRL
            </div>
            <div>
              20:04:37
              <span :class="variationStyle"
                >({{ coinConversion.variation }}) <i :class="variationIcon"></i
              ></span>
            </div>
          </div>
        </div>
        <div class="d-flex align-self-center me-4">
          <div><i class="bi bi-bell-fill me-4"></i></div>
          <div>
            <span class="m-2 p-2 rounded-circle bg-success">AH</span
            ><span class="me-2">Alex</span><i class="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, watchEffect } from "vue";
import { useCoinConversion } from "../stores/CoinConversionStore";

export default {
  name: "Navbar",
  setup() {
    const coinConversion = useCoinConversion();
    let variationIcon = ref("");
    let variationStyle = ref("");

    watchEffect(() => {
      if (parseFloat(coinConversion.variation) > 0) {
        variationIcon.value = "bi bi-caret-up-fill";
        variationStyle.value = "text-success";
      } else if (parseFloat(coinConversion.variation) < 0) {
        variationIcon.value = "bi bi-caret-down-fill";
        variationStyle.value = "text-danger";
      } else {
        variationIcon.value = "";
        variationStyle.value = "text-light";
      }
    });

    return { coinConversion, variationIcon, variationStyle };
  },
};
</script>
