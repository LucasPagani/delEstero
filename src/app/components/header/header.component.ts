import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  home(){
    this.router.navigate(['/']);
}

cartItemCount: number = 0;

constructor(private router: Router,private cartService: CartService) {}

ngOnInit() {
  this.updateCartCount();
}

updateCartCount() {
  this.cartItemCount = this.cartService.getCartItemCount();
}
}
