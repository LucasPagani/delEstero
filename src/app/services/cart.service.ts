import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; // Array para almacenar los productos

  constructor() { }

  // Agregar producto al carrito
  addToCart(product: any) {
    this.cartItems.push(product);
  }

  // Obtener productos del carrito
  getCartItems() {
    return this.cartItems;
  }

  // Eliminar producto del carrito
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  // Vaciar el carrito
  clearCart() {
    this.cartItems = [];
  }

  // Contar productos en el carrito
  getCartItemCount() {
    return this.cartItems.length;
  }
}
