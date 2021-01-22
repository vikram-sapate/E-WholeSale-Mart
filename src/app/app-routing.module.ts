import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },

  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'update-customer', component: UpdateCustomerComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
