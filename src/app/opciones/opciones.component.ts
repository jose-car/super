import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { GlobalService } from '../globalservice';


@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.css']
})
export class OpcionesComponent implements OnInit{
  displayedColumns: string[] = ['id', 'foto', 'categoria'];
  dataSource: any;
  /*new MatTableDataSource(ELEMENT_DATA);*/

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    private globalservice: GlobalService

  ) {

    /*console.log("estas en opciones",GlobalServices);*/


  }

  ngOnInit(): void {

    this.globalservice.Datos( 1 ).subscribe(( data: any) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
    });




    /*console.log("datos obtenidos",this.globalservice.apellidousuario)*/
  }

}
