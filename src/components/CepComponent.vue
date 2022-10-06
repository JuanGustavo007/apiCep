<template>
  <div>
    <div class="container">
      <!-- <input type="text" v-model="cep" maxlength="8" /> -->
      <div class="input-group gap-2">
        <span class="input-group-text" id="basic-addon1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            ></path>
          </svg>
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="CEP"
          aria-label="Input group example"
          aria-describedby="basic-addon1"
          v-model="cep"
          maxlength="8"
        />
      </div>

      <div class="container p-0">
        <ul class="list-group p-0">
          <div class="mt-5 p-0">
            <li
              class="list-group-item bg-dark text-white animar"
              :style="estilo"
              v-if="verDados"
            >
              Cep: {{ endereco.cep }}
            </li>
            <li
              class="list-group-item animar bg-dark text-white"
              v-if="verDados"
              :style="estilo"
            >
              logradouro: {{ endereco.logradouro }}
            </li>
            <li
              class="list-group-item animar bg-dark text-white"
              v-if="verDados"
              :style="estilo"
            >
              Bairro: {{ endereco.bairro }}
            </li>
            <li
              class="list-group-item animar bg-dark text-white"
              v-if="verDados"
              :style="estilo"
            >
              Localidade: {{ endereco.localidade }}
            </li>
            <li
              class="list-group-item animar bg-dark text-white"
              v-if="verDados"
              :style="estilo"
            >
              UF: {{ endereco.uf }}
            </li>
            <li
              class="list-group-item animar bg-dark text-white"
              v-if="verDados"
              :style="estilo"
            >
              DDD: {{ endereco.ddd }}
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animar:hover {
  transform: scale(1.01);
}
.form-control:focus {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(52, 51, 51, 0.6) !important;
}
.form-control {
  border-color: black;
}
</style>

<script>
export default {
  name: "CepComponent",
  data() {
    return {
      cep: "",
      endereco: [],
      url: "https://viacep.com.br/ws/01001000/json/",
      verDados: false,
      estilo: {
        marginBottom: "10px",
        border: "1px solid black",
        borderRadius: "5px",
      },
    };
  },
  watch: {
    cep(numero) {
      if (this.cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${numero}/json/`)
          .then((resposta) => resposta.json())
          .then((dados) => (this.endereco = dados));
        console.log(this.endereco);
        this.verDados = true;
      }
    },
  },
  methods: {
    ver() {
      console.log(this.endereco);
    },
  },
};
</script>
