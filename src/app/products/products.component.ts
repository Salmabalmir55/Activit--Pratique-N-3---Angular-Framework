import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [

  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true,
})
export class ProductsComponent implements OnInit {

  // 3. Typage plus précis pour vos produits
  products: Array<any> = [];

  constructor() {
  }

  ngOnInit() {
    this.products = [
      {id: 1, name: "Computer", price: 2300, selected: true},
      {id: 2, name: "Printer", price: 1200, selected: false},
      {id: 3, name: "Smart Phone", price: 1100, selected: true}
    ];
  }

  handleDelete(product: any) {
    let v = confirm("Are you sure you want to delete this product?");
    if (v == true) {
      this.products = this.products.filter((p) => p.id != product.id);
    }
  }
}
