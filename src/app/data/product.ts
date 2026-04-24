import { Product } from "../models/product.interface";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ventana aluminio blanca",
    price: 120000,
    category: "ventana",
    image: "assets/ventana1.jpg",
    description: "Ventana corrediza de aluminio",
    stock: 10
  },
  {
    id: 2,
    name: "Puerta de madera",
    price: 250000,
    category: "puerta",
    image: "assets/puerta1.jpg",
    description: "Puerta maciza premium",
    stock: 5
  }
];