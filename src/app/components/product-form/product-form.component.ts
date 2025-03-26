import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/productos.intercaces.';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Product = {
    id: '',
    type: '',
    category: '', //
    name: '',
    price: 0,
    description: '',
    stock: 0,
    code: ''
  };


  categories: string[] = ['alfombras', 'caminos', 'alfareria', 'textil', 'cesteria'];
  isEditing = false;

  private productService: ProductService = inject(ProductService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditing = true;
        this.loadProduct(params['id']);
      }
    });
  }

  async loadProduct(id: string) {
    try {
      const productSnap = await this.productService.getProduct(id);
      if (productSnap.exists()) {
        this.product = { id, ...productSnap.data() } as Product;
      } else {
        alert("Producto no encontrado");
        this.router.navigate(['/product-list']);
      }
    } catch (error) {
      console.error('Error al cargar el producto:', error);
      alert("Error al cargar el producto.");
    }
  }

  async onSubmit() {
    if (!this.product.name || !this.product.description || !this.product.price || !this.product.stock || !this.product.type) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      if (this.isEditing) {
        await this.productService.updateProduct(this.product.id, this.product);
        alert('Producto actualizado exitosamente');
      } else {
        await this.productService.createProduct(this.product);
        alert('Producto agregado exitosamente');
      }
      this.router.navigate(['/product-list']);
    } catch (error) {
      console.error('Error al guardar producto:', error);
      alert('Error al guardar el producto.');
    }
  }

  home() {
    this.router.navigate(['/']);
  }
}
