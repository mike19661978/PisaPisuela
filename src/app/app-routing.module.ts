import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OrderComponent } from './components/order/order.component';
import { SaleComponent } from './components/sale/sale.component';
import { ClientComponent } from './components/client/client.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component:LandingPageComponent},
  {path: 'products/home', component:ProductsHomeComponent},
  {path: 'products/add', component:ProductFormComponent},
  {path: 'products/view', component:ProductViewComponent},
  {path: 'product/edit/:id', component:ProductEditComponent},
  {path: 'orders/add', component:OrderComponent},
  {path: 'sales/add', component:SaleComponent},
  {path: 'clients/add', component:ClientComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
