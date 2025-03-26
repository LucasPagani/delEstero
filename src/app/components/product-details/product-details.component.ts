import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
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
throw new Error('Method not implemented.');
}


  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener ID de la URL
    if (id) {
      this.productService.getProduct(id).then((docSnap: { exists: () => any; data: () => any; }) => {
        if (docSnap.exists()) {
          this.product = docSnap.data();
        } else {
          console.error('Producto no encontrado');
        }
      });
    }
  }
}
