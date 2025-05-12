import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { EmpleadoConsulta } from '../Models/EmpleadoConsulta';
import { ResponseAPI } from '../Models/ResponseAPI';

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
    return this.http.post<ResponseAPI>(this.apiUrl,objeto);
  }

  editarEmpleado(objeto:EmpleadoConsulta){
    return this.http.put<ResponseAPI>(this.apiUrl,objeto);
  }

  eliminarEmpleados(clave_Trabajador:number){
    return this.http.delete<ResponseAPI>(`${this.apiUrl}/${clave_Trabajador}`);
  }

}
