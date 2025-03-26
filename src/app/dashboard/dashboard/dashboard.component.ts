import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
agregarProductos() {
  this.router.navigate(['/create']);
}
  constructor(private router: Router) {}

  verProductos() {
    this.router.navigate(['/product-list']);
  }

  verPedidos() {
    this.router.navigate(['/admin/orders']);
  }

  verPedidosEnGestion() {
    this.router.navigate(['/admin/orders-management']);
  }

  verVentas() {
    this.router.navigate(['/admin/sales']);
  }
}
