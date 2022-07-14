//componentes
const Crear = ()=> import('./components/categoria/Crear.vue')
const Editar = ()=> import('./components/categoria/Editar.vue')
const Mostrar = ()=> import('./components/categoria/Mostrar.vue')

export const routes = [

    {
        name:'mostrarCategorias',
        path: '/categorias',
        component:Mostrar
    },
    {
        name:'crearCategoria',
        path: '/crear',
        component:Crear
    },
    {
        name:'editarCategoria',
        path: '/editar/:id',
        component:Editar
    },
];