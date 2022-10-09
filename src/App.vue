<template>
  <div class="container">
    <h1>Carrito</h1>
    <pre>{{ carrito }}</pre>
    <Carrito />
    <div class="row">
      <!-- Of se usa tanto para array y objeto y lo pasamos al componente atravez de props-->
      <Card
        v-for="producto of productos"
        :key="producto.id"
        :producto="producto"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
// useStore nos traera todo lo que tengamos en store
import { useStore } from "vuex";
import Card from "./components/Card";
import Carrito from "./components/Carrito";

export default {
  name: "App",
  components: {
    Card,
    Carrito,
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const store = useStore();
    /* en vue2 normalmente esto iba en Create()  que es unos de ciclos de vida
    de vue y se hacia para que realizara el fetch de una vez , en vue3 no es necesiario porq ya es partes de Setup()*/
    onMounted(() => {
      // Dispatch dispara una accion que tengamos dentro de store, se le pasa el nombre de la accion y los parametro en caso de ser necesario
      store.dispatch("fetchData");
    });
    // Para mapaer la data es para que puedan esta disponibles normalmente se realizan en las computed property, en este caso se puede hacer de esta manera
    // Cuando se realiza una arrow funtion si no le colocas las llaves el return esta implicito
    const productos = computed(() => store.state.productos);
    const carrito = computed(() => store.state.carrito);

    // En vue3 se necesitan retornar los que vamos a usar
    return {
      productos,
      carrito,
    };
  },
};
</script>

<style></style>
