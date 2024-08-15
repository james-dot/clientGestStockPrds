import { Component } from '@angular/core';
import { ProduitComponent } from '../produit/produit.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ProduitComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
