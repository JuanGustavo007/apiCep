<template>
  <div>
    <CepComponent></CepComponent>
  </div>
</template>

<script>
import CepComponent from "./components/CepComponent.vue";

export default {
  name: "App",
  components: { CepComponent },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
