import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-home',
  standalone: false,
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {

  constructor(private router: Router) {}

  navegarA(ruta: string) {
    this.router.navigate([ruta]);
  }
}
