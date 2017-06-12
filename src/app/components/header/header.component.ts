
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showMobileMenu:any = false;
  @Output() onHeaderChnage: EventEmitter < any >= new EventEmitter();
  tabId:any =0;


  constructor() { }

  ngOnInit() {
  }

  onTabClick(tab){
    this.tabId = tab;
    this.onHeaderChnage.emit(tab);
  }
  hideMenu(){
    this.showMobileMenu = false;
  }
  showHideMenu(ev){
    ev.stopPropagation();
    this.showMobileMenu = !this.showMobileMenu;
  }
}
