import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [

  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true,
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe({
      next: resp => {
        this.products = resp;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handleDelete(product: any) {
    let v = confirm("Are you sure you want to delete this product?");
    if (v == true) {
      this.productService.deleteProduct(product).subscribe({
        next: value => {
          this.getAllProducts();
        },
        error: err => {
          console.log(err);
        }
      });

    }
  }
}
