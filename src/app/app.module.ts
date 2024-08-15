import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProduitMockService } from './produit/produit.mock.service';
import { ProduitComponent } from './produit/produit.component';



@NgModule({
  declarations: [
    AppComponent,ProduitComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,CommonModule
  ],
  providers: [ProduitMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
