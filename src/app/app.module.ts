import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { routing } from './app.routing';

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome'
import { faCircle,faSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle,faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { NavComponent } from './nav/nav.component';


import {DataService } from './data.service';

import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { interceptorProvider } from './proyectos-interceptor.service';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider";
import {  MatListModule } from "@angular/material/list";
import {  MatCardModule } from "@angular/material/card";
import {  MatDialogModule } from "@angular/material/dialog";
import {  MatButtonModule } from "@angular/material/button";
import {  MatSidenavModule } from "@angular/material/sidenav";
import {  MatFormFieldModule } from "@angular/material/form-field";
import {  MatInputModule } from "@angular/material/input";
import {  MatToolbarModule } from "@angular/material/toolbar";
import {  MatIconModule } from "@angular/material/icon";
import {  MatMenuModule } from "@angular/material/menu";
import {  MatGridListModule } from "@angular/material/grid-list";
import {  MatTableModule } from "@angular/material/table";
import {  MatCheckboxModule } from "@angular/material/checkbox";
import {  MatSortModule } from "@angular/material/sort";
import {  MatPaginatorModule } from "@angular/material/paginator";
import {  MatSelectModule } from "@angular/material/select";
import {  MatPaginatorIntl } from "@angular/material/paginator";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    CatalogoComponent,
    ProyectosComponent,
    ListaProyectosComponent,
    PagInicioComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  providers: [ CookieService, interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
 
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCircle,faSquare,farCircle,farSquare
          ,faStackOverflow,faGithub,faMedium);
  }
}
