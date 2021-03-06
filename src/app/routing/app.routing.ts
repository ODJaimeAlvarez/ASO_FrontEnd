import { RouterModule } from '@angular/router';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { ListaProyectosComponent } from '../lista-proyectos/lista-proyectos.component';
import { PagInicioComponent } from '../pag-inicio/pag-inicio.component';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
import { ListaFicherosComponent } from '../lista-ficheros/lista-ficheros.component';
import { TablaEmpleadosComponent } from '../tabla-empleados/tabla-empleados.component';
import { SeguimientoEmpleadoComponent } from '../ficha-seguimiento-empleado/ficha-seguimiento-empleado.component';
import { JornadaComponent } from '../jornada/jornada.component';
import { RolesGuardGuard as guardRoles } from '../guards/roles-guard.guard';
import { DarAltaComponent } from '../dar-alta/dar-alta.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { CalendarioComponent } from '../calendario/calendario.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { EditarProyectoComponent } from '../editar-proyecto/editar-proyecto.component';
import { LoginComponent } from '../auth/login.component';
import { RegistroComponent } from '../auth/registro.component';

const appRoutes = [
    { path: '', component: PagInicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'catalogo', canActivate: [AuthGuardGuard], component: CatalogoComponent },
    { path: 'proyectos', canActivate: [AuthGuardGuard], component: ProyectosComponent },
    { path: 'proyectos', canActivate: [AuthGuardGuard], component: ListaProyectosComponent },
    { path: 'ficheros/:id', canActivate: [AuthGuardGuard, guardRoles], component: ListaFicherosComponent, data: { expectedRol: ['empleado', 'director'] } },
    { path: 'seguimiento', canActivate: [AuthGuardGuard, guardRoles], component: TablaEmpleadosComponent, data: { expectedRol: ['director'] } },
    { path: 'seguimiento/empleado/:id', canActivate: [AuthGuardGuard, guardRoles], component: SeguimientoEmpleadoComponent, data: { expectedRol: ['director'] } },
    { path: 'jornada', canActivate: [AuthGuardGuard, guardRoles], component: JornadaComponent, data: { expectedRol: ['empleado', 'director'] } },
    { path: 'contactanos', canActivate: [AuthGuardGuard], component: ContactoComponent },
    { path: 'editarProyecto/:id', canActivate: [AuthGuardGuard], component: EditarProyectoComponent },
    { path: 'dar-alta', canActivate: [AuthGuardGuard, guardRoles], component: DarAltaComponent, data: { expectedRol: ['director'] } },
    { path: 'perfil', canActivate: [AuthGuardGuard], component: PerfilComponent },
    { path: 'calendario', canActivate: [AuthGuardGuard], component: CalendarioComponent }
];

export const routing = RouterModule.forRoot(appRoutes);