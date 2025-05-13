export interface Trabajador {
    id: number;
    clave_Trabajador: number;
    nombre: string;
    area_Name: string;
  }
  
  export interface ApiResponse {
    mesage: string;
    respose: Trabajador[];
  }
  