import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ThrowStmt } from '@angular/compiler';
import { GlobalService } from '../globalservice';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {
  displayedColumns: string[] = ['id_bodega', 'nombreBodega', 'direccion', 'numeroTelefonico' , 'NUMERO'];
  dataSource: any;


  constructor(
    private globalservice: GlobalService

  ) {

  }
  ngOnInit(): void {

    this.globalservice.bod('luis@gmail.com').subscribe(( data: any) => {
      console.log(data.data);
     /* this.dataSource = data;*/
      this.dataSource = new MatTableDataSource(data.data);
      /*console.log(this.dataSource);*/
    });
  }

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}