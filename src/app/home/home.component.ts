import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  pass;
  email;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private alerta: MatSnackBar
  ) { }





  ngOnInit(
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.alerta.open('Ingresa tus datos', ' ', { duration: 1000 });
  }

  /* loginForm: FormGroup; //se declara la variable del formulario  #2
   title = 'ProyectoAngular1';
   pass; //variables de passsword  #6
   email; //variable para email  #7



   //Datos de usuario #10
   idEmpleado: string;
   nombreCompleto: string;
   correo: string;
   telefono: string;
   activacio: string;
   asignado: string;


   constructor(
     private router: Router,
     private dialog: MatDialog,
     private formBuilder: FormBuilder,  //declara la variable del formBuilder del formulario #4
     private http: HttpClient,

   ) { }

   ngOnInit(): void {
     this.loginForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.pattern('(^[0-9]{10}$)|(^[a-zA-Z0-9._%-\u00f1\u00d1]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)')]],
       pass: ['', [Validators.required, Validators.minLength(1)]]
     });
   }

   opciones(){
     console.log('Hola');
     this.router.navigate( ['/usuario/opciones']);
   }

  menu(){
     console.log('prueba');
     this.router.navigate( ['/menu/lista']);
   }


   alert(){
     //console.alert('hola');
     const dialog = this.dialog.open(LoginComponent);
   }


 */
  sesion() {  //conexion #8
    /*console.log(!this.loginForm.valid);*
    console.log(!this.loginForm.value);*/

    let correo = "luis@gmail.com";
    let pass = "a1b2c3d4";
    this.http.get('https://superhouse.mx/pruebas/superHouseAdm/serviciosSuperHouse/validarIngresoWeb.php?user=' + correo + '&password=' + pass).subscribe(data => {
      console.log("respuesta2: " + data);

      /* this.http.get('https://superhouse.mx/pruebas/superHouseAdm/serviciosSuperHouse/validarIngresoWeb.php' + this.loginForm.value.email + '&password=' + this.loginForm.value.pass)
         .subscribe((res) => {
           console.log(res);*/

      if (data == 198) {
        //console.log("No se encontro el usuario");
        alert("no existe");


      } else {
        if (data == 203) {
          alert("no esta activado");


          //console.log("el usuario esta desactivado");
        } else {
          console.log("Se encontro el usuario pasa");
          // alert("pasa");
          this.router.navigate(['/usuario/opciones'])

        }
      }
    });
  }

}

