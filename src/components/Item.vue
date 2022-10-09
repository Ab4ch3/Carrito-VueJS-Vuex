<template>
  <tr>
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
      <button class="btn btn-info btn-sm" @click="aumentar(item.id)">+</button>
      <button class="btn btn-danger btn-sm" @click="disminuir(item.id)">
        -
      </button>
    </td>
    <td>
      $ <span>{{ item.precio * item.cantidad }}</span>
    </td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Item",
  // Resivimos la props que viene desde carrito
  props: ["item"],

  setup() {
    const store = useStore();
    // Esto lo pasamos entre llaves ya q solo va ejecutar
    const aumentar = (id) => {
      store.commit("aumentar", id);
    };
    const disminuir = (id) => {
      store.commit("disminuir", id);
    };

    return {
      aumentar,
      disminuir,
    };
  },
};
</script>

<style></style>
