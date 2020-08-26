import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ThrowStmt } from '@angular/compiler';
import { GlobalService} from '../globalservice';


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})


export class ProveedorComponent implements OnInit {
  displayedColumns: string[] = ['idProveedor', 'Nombre', 'correo', 'telefono', 'direccion'];
  dataSource: any;
  /*new MatTableDataSource(ELEMENT_DATA);*/

  // tslint:disable-next-line: typedef
  constructor(
    private globalservice: GlobalService

  )
{

  }

  ngOnInit(): void {

    this.globalservice.pro().subscribe(( data: any) => {
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
