import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router correctamente
import { CartComponent } from '../../shared/cart/cart.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  imports: [CommonModule ,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() product: any; // Recibe un producto como input

  constructor(private router: Router, private cartService: CartService) {}

  goToDetails(productId: string) {
    this.router.navigate([`/detail/${productId}`]); // Ahora sí funciona ✅
  }

  getImageUrl(productName: string): string {
    // Normaliza el nombre del producto para evitar problemas con espacios, tildes y caracteres especiales
    const normalizedName = productName
      .toLowerCase()                      // Convierte a minúsculas
      .replace(/\s+/g, '-')               // Reemplaza espacios por guiones
      .normalize('NFD')                   // Elimina tildes
      .replace(/[\u0300-\u036f]/g, '')    // Elimina los caracteres de acentuación
      .replace(/[^a-z0-9-]/g, '');        // Elimina cualquier carácter que no sea letra, número o guión

    // Ahora construimos la ruta completa para la imagen
    return `images/${normalizedName}.png`;
  }

  comprar() {
    this.cartService.addToCart(this.product);
    console.log('Producto agregado:', this.product);
    console.log('Carrito actual:', this.cartService.getCartItems());
  }

}
