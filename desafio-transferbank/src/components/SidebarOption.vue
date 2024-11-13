<template>
  <div
    class="p-3 me-0 mb-1 bg-success text-light d-flex justify-content-between border-radius-default"
    style="width: 100%"
    v-if="option.isSelected"
  >
    <div><i class="me-2" :class="option.icon"></i>{{ option.name }}</div>
    <div><i class="bi bi-caret-left-fill"></i></div>
  </div>
  <div
    class="p-3 me-0 mb-1 border-radius-default"
    style="width: 100%"
    v-else
    @mouseover="mouseIn"
    @mouseleave="mouseOut"
    :class="mouseOverClass"
  >
    <div><i class="me-2" :class="option.icon"></i>{{ option.name }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SidebarOption",
  props: ["option"],
  setup() {
    let mouseOverClass = ref("");
    // Usar a dica que ele deu do estilo!
    const mouseIn = () => {
      mouseOverClass.value = "bg-success text-light";
    };
    const mouseOut = () => {
      mouseOverClass.value = "";
    };

    return { mouseOverClass, mouseIn, mouseOut };
  },
};
</script>
