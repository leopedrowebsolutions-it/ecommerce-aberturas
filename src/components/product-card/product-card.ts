import { Component, Input } from '@angular/core';
import { CartService } from '../../app/services/cart';
import { Product } from '../../app/models/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product; // 👈 ESTO FALTABA

  constructor(private cartService: CartService) { }

  addToCart(product: Product) {
    console.log(product);
    this.cartService.addToCart(product);
  }
}
