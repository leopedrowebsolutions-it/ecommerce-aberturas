import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/product';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return PRODUCTS;
  }

}