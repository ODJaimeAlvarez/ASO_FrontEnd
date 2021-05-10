import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../auth/login.component';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { ListaProyectosComponent } from '../lista-proyectos/lista-proyectos.component';
import { PagInicioComponent } from '../pag-inicio/pag-inicio.component';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { ListaFicherosComponent } from '../lista-ficheros/lista-ficheros.component';
import { TablaEmpleadosComponent } from '../tabla-empleados/tabla-empleados.component';
import { SeguimientoEmpleadoComponent } from '../seguimiento-empleado/seguimiento-empleado.component';
import { JornadaComponent } from '../jornada/jornada.component';



const appRoutes = [
    { path: '', component: PagInicioComponent},
    { path: 'login', component: LoginComponent},
    { path: 'catalogo', canActivate: [AuthGuardGuard], component: CatalogoComponent},
    { path: 'proyectos', canActivate: [AuthGuardGuard], component: ProyectosComponent},
    { path: 'proyectos', canActivate: [AuthGuardGuard], component: ListaProyectosComponent},
    { path: 'ficheros/:id', canActivate: [AuthGuardGuard], component: ListaFicherosComponent},
    { path: 'seguimiento', canActivate: [AuthGuardGuard], component: TablaEmpleadosComponent},
    { path: 'seguimiento/empleado/:id', canActivate: [AuthGuardGuard], component: SeguimientoEmpleadoComponent},
    { path: 'jornada', canActivate: [AuthGuardGuard], component: JornadaComponent}
];

export const routing = RouterModule.forRoot(appRoutes);