import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf,RouterOutlet,ProduitComponent,NavbarComponent,SidebarComponent,ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  showHideSidebar: boolean = false;

  onShowSideBarChange(showHideSidebar:boolean){
      this.showHideSidebar = showHideSidebar;
  }

  
}
