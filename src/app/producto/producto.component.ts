import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ThrowStmt } from '@angular/compiler';
import { GlobalService} from '../globalservice';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['existencia', 'idBodPro', 'idProbob', 'nombreProducto', 'presentacionProducto', 'preciosucu', 'nombreBodega', 'nombreBodega', 'codigoBarras', 'activo', 'fechaExpiracion', 'detalleUnidadMedida', 'ItemNumber', 'detalleCompra', 'cantidadMayoreo', 'factura', 'iva', 'ieps', 'sat', 'precioCaja', 'precioCompra', 'preciocaja2', 'idProducto', 'idMarcaProducto', 'subcate', 'Ivaporcenteje', 'Iepsporcentaje', 'NUMERO'];
  dataSource: any;
  /*new MatTableDataSource(ELEMENT_DATA);*/

  // tslint:disable-next-line: typedef
  constructor(
    private globalservice: GlobalService

  )
{

  }

  ngOnInit(): void {

    this.globalservice. producto().subscribe(( data: any) => {
      console.log(data.data);
      this.dataSource = new MatTableDataSource(data.data);
    });


  }

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
