import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { routing } from './routing/app.routing';
import { DatePipe } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome'
import { faCircle,faSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle,faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { NavComponent } from './nav/nav.component';


import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { interceptorProvider } from './interceptors/proyectos-interceptor.service';
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
import { MenuhamburguerComponent } from './menuhamburguer/menuhamburguer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipe/filter.pipe';
import { ListaFicherosComponent } from './lista-ficheros/lista-ficheros.component';
import { TablaEmpleadosComponent } from './tabla-empleados/tabla-empleados.component';
import { SeguimientoEmpleadoComponent } from './ficha-seguimiento-empleado/ficha-seguimiento-empleado.component';
import { JornadaComponent } from './jornada/jornada.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLinkDelayModule } from '@bcodes/ngx-routerlink-delay';
import { GuiaPortalComponent } from './guia-portal/guia-portal.component';
import { PaginatePipe } from './pipe/paginate.pipe';
import { DarAltaComponent } from './dar-alta/dar-alta.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ToastrModule } from 'ngx-toastr';
import { RegistroComponent } from './auth/registro.component';
import { CalendarioComponent } from './calendario/calendario.component';


import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { GraficoComponent } from './grafico/grafico.component';
import { ChartsModule } from 'ng2-charts';
import { VerificarRegistroComponent } from './verificar-registro/verificar-registro.component';
import { GraficoUsuariosComponent } from './grafico-usuarios/grafico-usuarios.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    CatalogoComponent,
    ProyectosComponent,
    ListaProyectosComponent,
    PagInicioComponent,
    MenuhamburguerComponent,
    FilterPipe,
    ListaFicherosComponent,
    TablaEmpleadosComponent,
    SeguimientoEmpleadoComponent,
    JornadaComponent,
    GuiaPortalComponent,
    PaginatePipe,
    DarAltaComponent,
    PerfilComponent,
    RegistroComponent,
    ContactoComponent,
    GraficoComponent,
    GraficoUsuariosComponent,
    VerificarRegistroComponent,
    CalendarioComponent
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
    MatSelectModule,
    NgbModule,
    NgxPaginationModule,
    RouterLinkDelayModule,
    ToastrModule.forRoot(),
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    ChartsModule
  ],
  providers: [ CookieService, interceptorProvider, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
 
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCircle,faSquare,farCircle,farSquare
          ,faStackOverflow,faGithub,faMedium);
  }
}
