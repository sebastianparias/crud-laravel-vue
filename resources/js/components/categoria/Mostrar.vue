<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 mb-4">
        <router-link :to="{ name: 'crearCategoria' }" class="btn btn-success">Nuevo</router-link>
      </div>

      <h1 class="text-center">Lista de categorías</h1>

      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="bg-primary text-white">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="categoria in categorias" :key="categoria.id">
                <td>{{ categoria.id }}</td>
                <td>{{ categoria.Nombre }}</td>
                <td>{{ categoria.Descripcion }}</td>
                <td>{{ categoria.estado }}</td>
                <td>
                  <router-link :to='{ name: "editarCategoria", params: { id: categoria.id } }' class="btn btn-info">Editar
                  </router-link>

                  <a type="button" v-on:click="borrarCategoria(categoria.id)" class="btn btn-danger">Borrar</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "categorias",
  data() {
    return {
      categorias: [],
    };
  },

  mounted() {
    this.mostrarCategorias();
  },
  methods: {
    async mostrarCategorias() {
      await this.axios
        .get("/api/categoria")
        .then((response) => {
          this.categorias = response.data;
        })
        .catch((error) => {
          this.categoria = [];
        });
    },
    borrarCategoria(id) {
      if (confirm("¿Desea eliminar este registro?")) {
        this.axios
          .delete('/api/categoria/'+id)
          .then((response) => {
            this.mostrarCategorias();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>