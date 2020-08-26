import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private dialog: MatDialog;
  /*email = new FormControl('', [Validators.required, Validators] )*/

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  entrar() {
    alert('prueba');
  /*  if (this.email.valid) {
      console.log(this.email.value);
    }*/
    this.router.navigate(['/usuario/opciones']);

 }

}
