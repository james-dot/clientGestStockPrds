import { Produit } from "../shared/produit";
import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root',
  })
export class ProduitMockService{

         PRODUITS: Produit[] = [];

        constructor(){
            let p1: Produit = new Produit('livre', 50, 20);
            let p2: Produit = new Produit('Cahier', 50, 5.25);
            let p3: Produit = new Produit('Stylo', 500, 2.10);

            this.PRODUITS.push(p1);
            this.PRODUITS.push(p2);
            this.PRODUITS.push(p3);
        }
        public getProduits() : Produit[]{
            return this.PRODUITS ;
        }

}