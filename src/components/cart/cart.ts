import { Component } from '@angular/core';
import { CartService } from '../../app/services/cart';
import { CommonModule } from '@angular/common'; // 👈 FALTA ESTO
import { Product } from '../../app/models/product.interface';
@Component({
  selector: 'app-cart',
  imports: [CommonModule], // 👈 Y ESTO
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  constructor(private cartService: CartService) { }

  items: Product[] = [];

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  remove(index: number) {
    this.cartService.removeItem(index);
  }

  clear() {
    this.cartService.clearCart();
  }
}
