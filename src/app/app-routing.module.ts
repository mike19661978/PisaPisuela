import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OrderComponent } from './components/order/order.component';
import { SaleComponent } from './components/sale/sale.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component:LandingPageComponent},
  {path: 'products/add', component:ProductFormComponent},
  {path: 'orders/add', component:OrderComponent},
  {path: 'sales/add', component:SaleComponent},
  {path: 'clients/add', component:ClientComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
