<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Editar categoría</h4>
          </div>
        </div>
        <div class="card-body">
          <form @submit.prevent="actualizar">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="categoria.Nombre"
                  />
                </div>
              </div>

              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Descripción</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="categoria.Descripcion"
                  />
                </div>
              </div>

              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Estado</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="categoria.estado"
                  />
                </div>
              </div>

              <div class="col-12 mb-2">
                <button type="submit" class="btn btn-primary">Guardar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "editar-categoria",
  data() {
    return {
      categoria: {
        Nombre: "",
        Descripcion: "",
        estado: "",
      },
    };
  },
  mounted() {
    this.mostrarCategoria();
  },
  methods: {
    async mostrarCategoria() {
      await this.axios
        .get(`/api/categorias/${this.$route.params.id}`)
        .then((response) => {
          const { Nombre, Descripcion, estado } = response.data;
          this.categoria.Nombre = Nombre;
          this.categoria.Descripcion = Descripcion;
          this.categoria.estado = estado;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async actualizar() {
      await this.axios
        .put(`/api/categorias/${this.$route.params.id}`, this.categoria)
        .then((response) => {
          this.$router.push({
            name: "mostrarCategorias",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>