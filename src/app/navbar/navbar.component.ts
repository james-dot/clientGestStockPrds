import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{
  
  //afficher sidebar ou mettre disparu
  @Input()
  showSidebar: boolean=true;

  @Output()
  showSideBarChange: EventEmitter<boolean> =new EventEmitter<boolean>();

  constructor(){}
  
  ngOnInit(): void {}

  afficherSideBar(){
    this.showSidebar = !this.showSidebar;
    this.showSideBarChange.emit(this.showSidebar);
  }
}
