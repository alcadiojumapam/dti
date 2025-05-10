import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { EmpleadoConsulta } from '../Models/EmpleadoConsulta';

@Injectable({
  providedIn: 'root'
})
export class DtiApiService {

  private http = inject(HttpClient);
  private apiUrl:string = appsettings.apiUrl + "Asistencia";
  
  constructor() { }

  listaTerminales(){
    return this.http.get<EmpleadoConsulta[]>(this.apiUrl);
  }

  listaEmpleados(){
    return this.http.get<EmpleadoConsulta[]>(this.apiUrl);
  }

  obtenerEmpleados(clave_Trabajador:number){
    return this.http.get<EmpleadoConsulta[]>(`${this.apiUrl}/${clave_Trabajador}`);
  }

  registrarEmpleado(objeto:EmpleadoConsulta){
    return this.http.post<Response>(this.apiUrl,objeto);
  }

  editarEmpleado(objeto:EmpleadoConsulta){
    return this.http.put<Response>(this.apiUrl,objeto);
  }

  eliminarEmpleados(clave_Trabajador:number){
    return this.http.delete<Response>(`${this.apiUrl}/${clave_Trabajador}`);
  }

  eliminar(id:number){
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/${id}`);
  }

}
