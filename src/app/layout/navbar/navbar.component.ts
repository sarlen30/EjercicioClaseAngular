import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  claseActive = '';

  constructor(private router: Router) {
  }

  navegar() {
    this.router.navigate(['articulos']);
    this.claseActive = 'active';
  }


  borrarActive() {
    this.claseActive = '';
  }
}
