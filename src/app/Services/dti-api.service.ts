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

  listaEmpleados(){
    return this.http.get<EmpleadoConsulta[]>(this.apiUrl);
  }

  obtenerEmpleados(clave_Trabajador: number){
    return this.http.get<EmpleadoConsulta[]>(`${this.apiUrl}`);
  }

}
