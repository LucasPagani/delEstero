// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/productos.intercaces.';
import { CardComponent } from "../../components/card/card.component"; // Asegúrate de importar correctamente la interfaz
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CardComponent, CommonModule]
})
export class HomeComponent implements OnInit {


  products: Product[] = []; // Lista de todos los productos
  type = ['caminos', 'alfombras', 'cesteria', 'alfareria', 'textil']; // Categorías predefinidas
  filteredProducts: { [key: string]: Product[] } = {}; // Mapa para productos por categoría

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.type.forEach(type => {
      this.productService.getProductsByType(type).subscribe(products => {
        this.filteredProducts[type] = products;
      });
    });
  }

  getProductsByType(category: string): Product[] {
    return this.filteredProducts[category] || [];
  }

  home() {
    this.router.navigate(['/']);
  }

  scrollLeft(type: string) {
    const container = document.getElementById(type);
    if (container) {
      container.scrollLeft -= 300; // Cantidad de desplazamiento
    }
  }

  scrollRight(type: string) {
    const container = document.getElementById(type);
    if (container) {
      container.scrollLeft += 300; // Cantidad de desplazamiento
    }
  }

}
