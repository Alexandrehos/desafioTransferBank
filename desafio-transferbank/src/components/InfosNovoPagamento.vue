<template>
  <div class="bg-light d-flex row border-radius-default">
    <div class="p-4">
      <h4 class="mt-1">Buscar cliente</h4>
      <form action="" class="my-3">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control border-radius-default border-0"
            id="floatingInput"
            placeholder="name@example.com"
            :disabled="transaction.state === 'payment'"
          />
          <label for="floatingInput"><i class="bi bi-search"></i></label>
        </div>
      </form>
      <div
        class="container-fluid d-flex column justify-content-between bg-white py-4 px-3 border-radius-default"
      >
        <div>
          <div>Nome do cliente</div>
          <div class="fw-bold mt-1">{{ clientName }}</div>
        </div>
        <div>
          <div>CPF</div>
          <div class="fw-bold mt-1">{{ clientCPF }}</div>
        </div>
        <div>
          <div>Telefone</div>
          <div class="fw-bold mt-1">{{ clientPhone }}</div>
        </div>
        <div class="mx-2"></div>
      </div>
      <div class="mt-4">
        <h6>Valor da compra</h6>
        <div class="input-group mb-3">
          <span
            class="input-group-text border-0"
            id="inputGroup-sizing-default"
            style="background-color: white"
            ><img
              src="../assets/bandeira-us.svg"
              class="img-fluid rounded d-flex"
              style="height: 32px"
          /></span>
          <input
            type="text"
            class="form-control border-0 valueInput"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            style="text-align: end"
            placeholder="$ 00,00"
            v-model="valueAmount"
            :disabled="transaction.state === 'payment'"
          />
        </div>
      </div>
      <div class="d-flex column">
        <div class="col-6 me-1 mb-3" style="font-size: 0.9em">
          <h6>Detalhes da operação:</h6>
          <div
            class="d-flex row justify-content-between mx-1"
            style="height: 100%"
          >
            <div class="container-fluid d-flex justify-content-between p-0">
              <span
                ><i class="bi bi-info-circle-fill"></i> Custo (percentual)</span
              ><span class="fw-bold"
                >{{ transactionInfo.custoPercentualStr }}%</span
              >
            </div>
            <div class="container-fluid d-flex justify-content-between p-0">
              <span
                ><i class="bi bi-info-circle-fill"></i> Cotação comercial</span
              ><span class="fw-bold">R$ {{ coinConversion.ratio }}</span>
            </div>
            <div class="container-fluid d-flex justify-content-between p-0">
              <span><i class="bi bi-info-circle-fill"></i> Imposto (IOF)</span
              ><span class="fw-bold"
                >R$ {{ transactionInfo.iofAmountStr }}</span
              >
            </div>
            <div class="container-fluid d-flex justify-content-between p-0">
              <span><i class="bi bi-info-circle-fill"></i> Tarifa</span
              ><span class="fw-bold"
                >$ {{ transactionInfo.transactionChargeStr }}</span
              >
            </div>
            <div class="container-fluid d-flex justify-content-between p-0">
              <span><i class="bi bi-info-circle-fill"></i> Dolar VET</span
              ><span class="fw-bold"
                >R$ {{ transactionInfo.dolarVETValueStr }}</span
              >
            </div>
          </div>
        </div>
        <div class="col-6 ms-2">
          <h6>Cliente pagará:</h6>
          <div
            class="container-fluid d-flex justify-content-between p-2 border-radius-default"
            style="background-color: white"
          >
            <div>
              <img
                src="../assets/bandeira-br.png"
                alt="bandeira-brasil"
                style="height: 32px"
              />
            </div>
            <div class="fw-bold d-flex align-items-center me-3">
              R$ {{ transactionInfo.transactionValueFinalStr }}
            </div>
          </div>
          <div class="my-5"></div>
          <BotaoPagamento
            @startChargeProccess="startChargeProccess"
            @cancelChargeProccess="cancelChargeProccess"
            :buttonState="buttonState"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

import { useCoinConversion } from "../stores/CoinConversionStore";
import { useTransactionInfo } from "../stores/TransactionInfoStore";
import { useTransaction } from "../stores/TransactionStore";

import BotaoPagamento from "./BotaoPagamento.vue";

export default {
  name: "InfosNovoPagamento",
  components: { BotaoPagamento },
  setup() {
    const coinConversion = useCoinConversion();
    const transactionInfo = useTransactionInfo();
    const transaction = useTransaction();
    let cpfInput = ref("");
    let clientName = ref("Alan da Silva Golçalves");
    let clientCPF = ref("08182227941");
    let clientPhone = ref("5541995988760");
    let valueAmount = ref("");
    let buttonState = ref("generateQRCode");

    let chargeOrder = ref("");

    watch(valueAmount, () => {
      transactionInfo.setTransactionValue(valueAmount);
    });

    const startChargeProccess = () => {
      if (valueAmount.value != "") {
        buttonState.value = "cancelChargeOrder";
        transaction.createTransactionOrder({
          state: "payment",
          clientName: clientName.value,
          clientCPF: clientCPF.value,
          clientPhone: clientPhone.value,
          dolarValue: coinConversion.ratio,
          dolarVETValue: transactionInfo.dolarVETValue,
          finalOrderValue: valueAmount.value,
          finalOrderValueClient: transactionInfo.transactionValueFinal,
          type: "Pix",
          flow: "Inbound",
        });
      }
    };

    const cancelChargeProccess = () => {
      console.log("Clicou pra cancelar cobrança");
      buttonState.value = "generateQRCode";
      transaction.createTransactionOrder({
        state: "waiting",
        clientName: "",
        clientCPF: "",
        clientPhone: "",
        dolarValue: "",
        dolarVETValue: "",
        finalOrderValue: "",
        finalOrderValueClient: "",
      });
    };

    transaction.$subscribe((orderPaymentConfirmation) => {
      console.log("Achou");
      if (transaction.orderPaymentConfirmation) {
        console.log("Achou verdades");
        cancelChargeProccess();
        valueAmount.value = 0;
        transaction.resetOrderConfirmation();
      }
    });

    return {
      cpfInput,
      clientName,
      clientCPF,
      clientPhone,
      valueAmount,
      coinConversion,
      transactionInfo,
      startChargeProccess,
      cancelChargeProccess,
      buttonState,
      transaction,
    };
  },
};

/*
export const useTransaction = defineStore("transactionStore", {
  state: () => ({
    state: "waiting",
    clientName: "",
    clientCPF: "",
    clientPhone: "",
    dolarValue: "",
    dolarVETValue: "",
    finalOrderValue: "",
    orderPaymentConfirmation: "",
  }),
  getters: {},
  actions: {
    setTransactionValue(value) {
      this.transactionValueOriginal = parseFloat(value.value);
    },
  },
});
*/
</script>

<style scoped>
.valueInput::placeholder {
  font-weight: 700;
  color: black;
}

.valueInput {
  font-weight: 700;
  color: black;
}
</style>

<!--
<div>
          <h6>Detalhes da operação</h6>
          <div>
            <span
              ><i class="bi bi-info-circle-fill"></i> Custo (percentual)</span
            ><span>0,70%</span>
          </div>
          <div>
            <span><i class="bi bi-info-circle-fill"></i> Cotação comercial</span
            ><span>R$ {{ useCoinConversion.ratio }}</span>
          </div>
          <div>
            <span><i class="bi bi-info-circle-fill"></i> Imposto (IOF)</span
            ><span
              >R$
              {{
                (parseFloat(useCoinConversion.ratio * 0.38) + "0000").slice(
                  0,
                  6
                )
              }}</span
            >
          </div>
          <div>
            <span><i class="bi bi-info-circle-fill"></i> Tarifa</span
            ><span>$ 10,00</span>
          </div>
          <div>
            <span><i class="bi bi-info-circle-fill"></i> Dolar VET</span
            ><span></span>
          </div>
        </div>
-->
