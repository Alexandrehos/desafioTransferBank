<template>
  <div class="d-flex flex-row mt-2">
    <div class="container-fluid p-0">
      <div
        class="progress justify-content-end rounded-0 rounded-start"
        role="progressbar"
        aria-label="Example 1px high"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        style="height: 8px"
      >
        <div
          class="progress-bar bg-success rounded-start"
          :style="{ width: progressBarPercentageStr }"
        ></div>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div
        class="progress rounded-0 rounded-end"
        role="progressbar"
        aria-label="Example 1px high"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        style="height: 8px"
      >
        <div
          class="progress-bar bg-success rounded-end"
          :style="{ width: progressBarPercentageStr }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";

import { useTransaction } from "../stores/TransactionStore";

export default {
  name: "ProgressBar",
  props: ["timer"],
  emits: ["timeOut"],
  setup(props, { emit }) {
    const transaction = useTransaction();
    let timeLimit = parseInt(props.timer);
    let step = timeLimit / 100;
    let timePassed = ref(0);
    let progressBarPercentage = ref(100);

    let progressBarPercentageStr = computed(() => {
      return progressBarPercentage.value + "%";
    });

    transaction.$subscribe((state) => {
      if (transaction.getState === "payment") {
        let counter = setInterval(() => {
          timePassed.value = timePassed.value + step;
          progressBarPercentage.value -= 1;
          if (timePassed.value > timeLimit) {
            clearInterval(counter);
            setTimeout(() => {
              emit("timeOut");
            }, 1500);
          }
          if (transaction.getState !== "payment") {
            clearInterval(counter);
          }
        }, step);
      }
      if (transaction.getState === "waiting") {
        progressBarPercentage.value = 100;
        timePassed.value = 0;
      }
    });

    return { progressBarPercentageStr, transaction };
  },
};
</script>
