
import { Component,OnInit } from '@angular/core';
import { ProduitMockService } from './produit.mock.service';
import { Produit } from '../shared/produit';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [NgFor],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})

export class ProduitComponent implements OnInit{

  produits: Produit[] = [];

  constructor(private produitService : ProduitMockService){}
     
 ngOnInit(){
        this.produits = this.produitService.getProduits();
        }
}
