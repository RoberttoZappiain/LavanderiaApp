import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage  {

  constructor(private router: Router) { }
  navigate(){
    this.router.navigate(['/servicio-nuevo'])
  }
}
