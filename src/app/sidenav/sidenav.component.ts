import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnDestroy {


  mobileQuery: MediaQueryList;

   fillerNav = [
    { name: 'Menu', route: 'opciones', icon: 'grade' },
    { name: 'Producto', route: 'producto', icon: 'perm_contact_calendar' },
    { name: 'Provedores', route: 'proveedor', icon: 'perm_contact_calendar' },
    { name: 'Personal', route: 'cliente', icon: 'perm_contact_calendar' },
    { name: 'Bodegas', route: 'bodegas', icon: 'perm_contact_calendar' },
    { name: 'Unidades', route: 'unidades', icon: 'perm_contact_calendar' },
    { name: 'Pedidos', route: 'pedidos', icon: 'perm_contact_calendar' },
  ];

  fillerContent = Array.from({ length: 60}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  // tslint:disable-next-line: variable-name
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 700px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;



}
