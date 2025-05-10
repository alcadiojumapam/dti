import { Component, inject } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { DtiApiService } from '../../../Services/dti-api.service';
import { EmpleadoConsulta } from '../../../Models/EmpleadoConsulta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-empleado',
  imports: [MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './listado-empleado.component.html',
  styleUrl: './listado-empleado.component.css'
})
export class ListadoEmpleadoComponent {
  private empleadoServicio = inject(DtiApiService);
  public listaEmpleados:EmpleadoConsulta[]=[];
  public displayedColumns: string[] = ['id','clave_Trabajador','nombre','area_Name','accion'];

  obtenerEmpleados(){
    this.empleadoServicio.listaEmpleados().subscribe({
      next:(data)=>{
        if(data.length > 0){
          this.listaEmpleados  = data;
        }
      },
      error:(err)=>{
        console.log(err.message)
      }
    })
  }

  constructor(private router:Router){

    this.obtenerEmpleados();
  }

  nuevo(){
    this.router.navigate(['/registrar-empleado',0]);
  }

  editar(objeto:EmpleadoConsulta){
    this.router.navigate(['/registrar-empleado',objeto.id]);
  }

  eliminar(objeto:EmpleadoConsulta){
    if(confirm("Desea eliminar el empledo " + objeto.nombre)){
      this.empleadoServicio.eliminarEmpleados(objeto.clave_Trabajador).subscribe({
        next:(data)=>{
          if(data.isSuccess){
            this.obtenerEmpleados();
          }else{
            alert("no se pudo eliminar")
          }
        }
      })
    }
  }

}