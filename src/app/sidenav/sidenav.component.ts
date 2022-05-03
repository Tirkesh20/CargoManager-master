import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { navbarData } from './nav-data';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output()onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter
  collapsed= false;
  navData= navbarData;
  screenWidth=0;

  constructor() { }

  ngOnInit(): void {
  }


  toggleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})
  }

  closeSidenav():void{
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})

  }

}