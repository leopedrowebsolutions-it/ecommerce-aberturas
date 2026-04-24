import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  getItems(): Product[] {
    return this.items;
  }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  clearCart(): void {
    this.items = [];
  }
}