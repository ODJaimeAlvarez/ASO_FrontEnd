import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { AuthGuardGuard } from './auth-guard.guard';


const appRoutes = [
    { path: '', component: PagInicioComponent},
    { path: 'login', component: LoginComponent},
    { path: 'catalogo', component: CatalogoComponent},
    { path: 'proyectos', component: ProyectosComponent},
    { path: 'proyectos', component: ListaProyectosComponent}
];

export const routing = RouterModule.forRoot(appRoutes);