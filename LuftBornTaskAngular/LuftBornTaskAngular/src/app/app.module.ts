import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductApiService } from './Product-api.service';
import { ProductComponent } from './Product/Product.component';
import { ShowProductComponent } from './Product/show-Product/show-Product.component';
import { AddEditProductComponent } from './Product/add-edit-Product/add-edit-Product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditProductComponent,
    ShowProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  
  providers: [ProductApiService],

  bootstrap: [AppComponent]
})
export class AppModule { }
