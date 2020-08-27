import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioModule } from './usuario.module';
import { UsuarioComponent } from './usuario.component';
import { OpcionesComponent } from '../opciones/opciones.component';
import { ProductoComponent } from '../producto/producto.component';
import { ProveedorComponent } from '../proveedor/proveedor.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { BodegasComponent } from '../bodegas/bodegas.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { UnidadesComponent } from '../unidades/unidades.component';


const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [{
      path: 'opciones',
      component: OpcionesComponent
    },
    {
      path: 'producto',
      component: ProductoComponent
    },
    {
      path: 'proveedor',
      component: ProveedorComponent
    },
    {
      path: 'cliente',
      component: ClienteComponent
    },
    {
      path: 'bodegas',
      component: BodegasComponent
    },
    {
      path: 'unidades',
      component: UnidadesComponent
    },
    {
      path: 'pedidos',
      component: PedidosComponent
    },
    {
      path: '',
      component: ProductoComponent

    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
