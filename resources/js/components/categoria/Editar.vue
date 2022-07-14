<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header"><h4>Crear categoría</h4></div>
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
                    v-model="categoria.nombre"
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
                <div class="form-group">
                  <label>Descripción</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="categoria.descripcion"
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
        nombre: "",
        estado: "",
        descripcion: "",
      },
    };
  },
  mounted(){
    this.mostrarCategoria()
  },
  methods:{
    async mostrarCategoria(){
        this.axios.get('/api/categoria/${this.$route.params.id}')
        .then(response=>{
            const {nombre, estado, descripcion} = response.data
            this.categoria.nombre = nombre,
            this.categoria.estado = estado,
            this.categoria.descripcion = descripcion,
        })
        .catch(error=>{
            console.log(error)
        })

    },
    async actualizar(){
        this.axios.put('/api/categoria/${this.$route.params.id}', this.categoria)
        .then(response=>{
            this.$route.push({
                name:"mostrarCategorias"
            })
        })
        .catch(error=>{
            console.log(error)
        })

    }
  }
};
</script>