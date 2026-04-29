import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from "../components/product-list/product-list";
import { Cart } from "../components/cart/cart";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ecommerce-aberturas';
}
