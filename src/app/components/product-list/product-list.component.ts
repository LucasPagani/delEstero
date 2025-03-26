import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any[] = []; // Todos los productos de Firebase
  filteredProducts: any[] = []; // Productos filtrados
  selectedCategory: string = ''; // Categoría seleccionada
  private router: Router = inject(Router); // Asegúrate de inyectar el router

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().then((querySnapshot) => {
      this.products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      this.filteredProducts = this.products; // Al inicio, muestra todos
      this.sortByCode(); // Ordenar por 'code' al iniciar
    });
  }

  filterByCategory() {
    const filtered = this.selectedCategory
      ? this.products.filter(product => product.type === this.selectedCategory)
      : this.products;

    this.filteredProducts = filtered.sort((a, b) => a.code.localeCompare(b.code));
  }

  sortByCode() {
    this.filteredProducts.sort((a, b) => a.code.localeCompare(b.code));
  }

  editProduct(id: string) {
    this.router.navigate([`/edit/${id}`]);  // Navegar al formulario de edición
  }

  reset() {
    this.filteredProducts = [...this.products];
    this.sortByCode(); // Vuelve a ordenar al volver al inicio
  }

  dashboard(){
    this.router.navigate([`/admin`]);
  }
}
