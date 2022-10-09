import { createStore } from "vuex";

export default createStore({
  // Las stage es lo que vamos a leer desde la api o en este caso del json
  state: {
    /* Estos producto van a estar disponible para acceder de modo global a    cualquier componente
     */
    productos: [],
    carrito: {},
  },
  getters: {},
  // Las mutaciones solo sirven para modificar el state
  mutations: {
    // payload viene siendo donde cargaremos lo q recibimos del api
    setProducto(state, payload) {
      state.productos = payload;
      // Mostramos en consola los que nos estamos trayendo
      console.log(state.productos);
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload;
    },
  },
  /*  Las acciones se ocupan de hacer un llamado al servidor o si se necesita logica adicional y se pasan a la mutacion para luego ser modificadas y pasarlas al stage
   */
  actions: {
    /* Aca realizamos la solicitud al servidor  */
    async fetchData({ commit }) {
      try {
        // Espera la respuesta del fetch
        const res = await fetch("api.json");
        // Espera que ya res obtenga el JSON
        const data = await res.json();
        /* Luego atravez del commit se lo pasamos a la mutacion , junto con la data para que la modifique la mutacion y la pase al stage
         */
        commit("setProducto", data);
      } catch (error) {
        console.log(error);
      }
    },
    /*Accion para agregar items al carrito , pasandole los productos que ya tenemos cargadas   */
    agregarAlCarro({ commit, state }, producto) {
      /* Aqui estamos verificando si en el carrito existe el producto lo agregara y ala propiedad cantidad y le sumara , pero si ya existe solo agregara 1   */
      // eslint-disable-next-line no-prototype-builtins
      if (state.carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = state.carrito[producto.id].cantidad + 1;
      } else {
        producto.cantidad = 1;
      }
      commit("setCarrito", producto);
    },
  },
  modules: {},
});
