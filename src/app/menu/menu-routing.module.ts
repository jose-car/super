import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { ListaComponent } from '../lista/lista.component';


const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    children: [{
      path: 'lista',
      component: ListaComponent
    }]
  },
  /*{
    path: 'opciones', component: OpcionesComponent
  }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
