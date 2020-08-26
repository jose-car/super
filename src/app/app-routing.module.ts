import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {UsuarioModule} from '../app/usuario/usuario.module';
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user', loadChildren: ( ) => import('./usuario/usuario.module').then ( m => m.UsuarioModule)
  },
  {
    path: 'm', loadChildren: ( ) => import('./menu/menu.module').then ( m => m.MenuModule)
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
