import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { from } from 'rxjs'; // Importa 'from' de RxJS

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: any[] = []; // Puedes tipar esto mejor con una interfaz

  constructor(private productService: ProductService, private router: Router) { } // Inyecta Router

  ngOnInit() {
    from(this.productService.getProducts()).subscribe({ // Usa from() para convertir a Observable
      next: (querySnapshot) => { // Usa 'next' para manejar los datos
        this.products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      },
      error: (error) => { // Maneja los errores
        console.error("Error al obtener productos:", error);
        // Puedes mostrar un mensaje al usuario o realizar otras acciones
      },
      complete: () => { // Opcional: Se ejecuta cuando la suscripción se completa
        console.log("Obtención de productos completada.");
      }
    });
  }
}
