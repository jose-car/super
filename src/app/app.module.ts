import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {UsuarioModule} from './usuario/usuario.module';
import {UsuarioRoutingModule} from './usuario/usuario-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { OpcionesComponent } from './usuario/opciones/opciones.component';*/
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
/*import { ListaComponent } from './lista/lista.component';*/
import { MenuModule } from './menu/menu.module';
import { MenuRoutingModule } from './menu/menu-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { GlobalService } from './globalservice';
/*import { HttpClient } from '@angular/common/http';*/
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule, FormsModule  } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
/*import { PedidosComponent } from './pedidos/pedidos.component';*/
/*import { ClienteComponent } from './cliente/cliente.component';
import { BodegasComponent } from './bodegas/bodegas.component';
import { UnidadesComponent } from './unidades/unidades.component';
/*import { ProveedorComponent } from './proveedor/proveedor.component';
/*import { ProductoComponent } from './producto/producto.component';*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    UsuarioRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MenuModule,
    MenuRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule
  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ LoginComponent],
})
export class AppModule { }
