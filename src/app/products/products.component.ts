import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'; // 1. On importe NgFor (plus simple)

@Component({
  selector: 'app-products',
  imports: [
    NgIf,
    NgFor // 2. On utilise NgFor ici
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true,
})
export class ProductsComponent implements OnInit {

  // 3. Typage plus précis pour vos produits
  products: Array<any> = [];

  constructor () {}

  ngOnInit() {
    this.products = [
      { id: 1, name: "Computer", price: 2300, selected: true },
      { id: 2, name: "Printer", price: 1200, selected: false },
      { id: 3, name: "Smart Phone", price: 1100, selected: true },
    ];
  }
}
