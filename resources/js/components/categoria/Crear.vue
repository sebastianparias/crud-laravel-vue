<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Crear categoría</h4>
          </div>
        </div>
        <div class="card-body">
          <form @submit.prevent="crear">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Nombre</label>
                  <input type="text" class="form-control" v-model="categoria.Nombre" />
                </div>
              </div>

              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Descripción</label>
                  <input type="text" class="form-control" v-model="categoria.Descripcion" />
                </div>
              </div>

              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Estado</label>
                  <input type="text" class="form-control" v-model="categoria.estado" />
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
  name: "crear-categoria",
  data() {
    return {
      categoria: {
        Nombre: "",
        Descripcion: "",
        estado: ""
      },
    };
  },
  methods: {
    async crear() {
      await this.axios.post('/api/categorias', this.categoria)
        .then(response => {
          this.$router.push({ name: "mostrarCategorias" })
        }) //methodo http post
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>