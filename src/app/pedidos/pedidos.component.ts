import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ThrowStmt } from '@angular/compiler';
import { GlobalService} from '../globalservice';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  displayedColumns: string[] = ['id_pedido', 'nombreBodega', 'direccionPedido', 'fecha_hora_pedido', 'fecha_hora_entrega', 'estado', 'NUMERO'];
  dataSource: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  /*new MatTableDataSource(ELEMENT_DATA);*/

  // tslint:disable-next-line: typedef
  constructor(
    private globalservice: GlobalService

  )
{

  }

  ngOnInit(): void {

    this.globalservice.pedidos().subscribe(( data: any) => {
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

