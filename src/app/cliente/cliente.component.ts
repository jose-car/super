import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ThrowStmt } from '@angular/compiler';
import { GlobalService } from '../globalservice';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  displayedColumns: string[] = ['id_empleado', 'nombreCompleto', 'puesto', 'telefono' , 'jefeInmediato', 'NUMERO'];
  dataSource: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private globalservice: GlobalService

  ) {

  }
  ngOnInit(): void {
    this.globalservice.cli('luis@gmail.com').subscribe(( data: any) => {
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
