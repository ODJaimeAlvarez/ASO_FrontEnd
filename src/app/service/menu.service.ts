import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public sidenav: any;

  constructor() { }

  public closeMenu() {
    this.sidenav.close();
  }

  public openMenu() {
    this.sidenav.open();
  }
}
