import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    ProductFormComponent,
    ConfirmationDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
