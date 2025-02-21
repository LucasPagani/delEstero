import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'product', component: ProductListComponent },
{ path: 'product/:id', component: ProductDetailsComponent },
{ path: 'create', component: ProductFormComponent },
{ path: 'edit/:id', component: ProductFormComponent }

];
