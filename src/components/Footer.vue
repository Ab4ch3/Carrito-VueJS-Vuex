<template>
  <th scope="row" colspan="2">Total productos</th>
  <td>{{ totalCantidad }}</td>
  <td>
    <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="vaciar">
      vaciar todo
    </button>
  </td>
  <td class="font-weight-bold">
    $ <span>{{ totalPrecio }}</span>
  </td>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",

  setup() {
    const store = useStore();

    // eslint-disable-next-line no-unused-vars
    const totalCantidad = computed(() => store.getters.totalCantidad);
    const totalPrecio = computed(() => store.getters.totalPrecio);

    const vaciar = () => {
      store.commit("vaciarCarrito");
    };

    return {
      totalCantidad,
      totalPrecio,
      vaciar,
    };
  },
};
</script>

<style></style>
