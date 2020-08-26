import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UsuarioRoutingModule} from './usuario-routing.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { UsuarioComponent } from './usuario.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { OpcionesComponent } from '../opciones/opciones.component';
import { ProductoComponent } from '../producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProveedorComponent } from '../proveedor/proveedor.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { BodegasComponent } from '../bodegas/bodegas.component';
import { ClienteComponent } from '../cliente/cliente.component';
import { UnidadesComponent } from '../unidades/unidades.component';
import { PedidosComponent } from '../pedidos/pedidos.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    SidenavComponent,
    OpcionesComponent,
    ProductoComponent,
    ProveedorComponent,
    BodegasComponent,
    ClienteComponent,
    UnidadesComponent,
    PedidosComponent
  ],
  imports: [
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    UsuarioRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatPaginatorModule,
    FormsModule,
    MatButtonModule,

  ]
})
export class UsuarioModule { }
