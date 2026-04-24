import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../app/models/product.interface';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../../app/services/product';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard], // 👈 AGREGAR ESTO
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Product[] = [];           // 👈 FALTABA ESTO
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products; // 👈 inicializar lista visible
  }

  filterByCategory(category: string) {
    this.filteredProducts = this.products.filter(
      p => p.category === category
    );
  }

  search(term: string) {
    this.filteredProducts = this.products.filter(p =>
      p.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}