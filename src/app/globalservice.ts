import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private http: HttpClient
  ) { }


  // tslint:disable-next-line: typedef
  Datos(idBodega: number){
    const path = `https://superhouse.mx/superHouseAdm/serviciosUlunch/categorias.php?idBodega=${idBodega}`;
    return this.http.get(path);
  }

  // tslint:disable-next-line: typedef
  pro(){
    const path = `https://superhouse.mx/pruebas/superHouseAdm/serviciosSuperHouse/getProveedores.php`;
    return this.http.get(path);
  }

  // tslint:disable-next-line: typedef
  bod(correo: string){
    const path = `https://superhouse.mx/pruebas/superHouseAdm/serviciosSuperHouse/getbodegas.php?correo=${correo}`;
    return this.http.get(path);
  }

  // tslint:disable-next-line: typedef
  cli(correo: string){
    const path = `https://superhouse.mx/pruebas/superHouseAdm/serviciosSuperHouse/getPersonal.php?correo=${correo}`;
    return this.http.get(path);
  }

  // tslint:disable-next-line: typedef
  producto(){
    const path = `https://superhouse.mx//pruebas/superHouseAdm/serviciosSuperHouse/getProductosActivos.php`;
    return this.http.get(path);
  }

  // tslint:disable-next-line: typedef
  unidades(){
    const path = `https://superhouse.mx//pruebas/superHouseAdm/serviciosSuperHouse/getUnidades.php`;
    return this.http.get(path);
  }

  // tslint:disable-next-line: typedef
  pedidos(){
    const path = `https://superhouse.mx//pruebas/superHouseAdm/serviciosSuperHouse/getPedidosActivos2.php`;
    return this.http.get(path);
  }

}

