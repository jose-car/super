import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ThrowStmt } from '@angular/compiler';
import { GlobalService } from '../globalservice';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['existencia', 'idBodPro', 'idProbob', 'nombreProducto', 'presentacionProducto', 'preciosucu', 'nombreBodega', 'nombreBodega', 'codigoBarras', 'activo', 'fechaExpiracion', 'detalleUnidadMedida', 'ItemNumber', 'detalleCompra', 'cantidadMayoreo', 'factura', 'iva', 'ieps', 'sat', 'precioCaja', 'precioCompra', 'preciocaja2', 'idProducto', 'idMarcaProducto', 'subcate', 'Ivaporcenteje', 'Iepsporcentaje', 'NUMERO'];
  dataSource: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private globalservice: GlobalService

  )
{

  }

  ngOnInit(): void {

    this.globalservice. producto().subscribe(( data: any) => {
      console.log(data.data);
      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
