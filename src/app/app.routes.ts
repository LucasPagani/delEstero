import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './pages/home/home.component';

import { AboutComponent } from './pages/about/about.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './shared/cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [

{ path: '', component: HomeComponent },
{ path: 'product-list', component: ProductListComponent },
{ path: 'product/:id', component: ProductDetailsComponent },
{ path: 'create', component: ProductFormComponent },
{ path: 'edit/:id', component: ProductFormComponent },
{ path: 'about', component: AboutComponent },
{ path: 'stories', component: StoriesComponent },
{ path: 'cart', component: CartComponent },
{ path: 'detail/:id', component: ProductDetailsComponent },
{ path: 'admin', component: DashboardComponent }

];
