<template>
  <div>
    <h1>Collatz</h1>
    <input type="number" v-model="numero" />
    <br />
    <button @click="generarCollatz()">Generar collatz</button>
    <ul>
      <li v-for="num in numeros" :key="num">{{num}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  data() {
    return {
      numero: 0,
      numeros: [],
    };
  },
  methods: {
    generarCollatz() {
      var aux = this.numero;
      this.numeros=[];
      while (aux != 1) {
        if (aux % 2 === 0) {
          aux = aux / 2;
        } else {
          aux = aux * 3 + 1;
        }
        this.numeros.push(aux);
      }
    },
  },
};
</script>

<style>
</style>