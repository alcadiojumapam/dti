import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AccesoComponent } from './pages/acceso/acceso.component';
import { RegistrarEmpleadoComponent } from './pages/asistencia/registrar-empleado/registrar-empleado.component';
import { ListadoEmpleadoComponent } from './pages/asistencia/listado-empleado/listado-empleado.component';
import { LayoutComponent } from './pages/shared/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path:'acceso',
                component:AccesoComponent
            },
            {
                path:'asistencia/listado-empleado',
                component:ListadoEmpleadoComponent
            },
            {
                path:'asistencia/registrar-empleado/:id',
                component:RegistrarEmpleadoComponent
            }
        ]
    }
];
