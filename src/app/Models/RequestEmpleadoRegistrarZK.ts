export interface RequestEmpleadoRegistrarZK{
    id: number;
    clave_Trabajador: number;
    lunes_Entrada: string;
    lunes_Salida: string;
    martes_Entrada: string;
    martes_Salida: string;
    miercoles_Entrada: string;
    miercoles_Salida: string;
    jueves_Entrada: string;
    jueves_Salida: string;
    viernes_Entrada: string;
    viernes_Salida: string;
    sabado_Entrada: string;
    sabado_Salida: string;
    domingo_Entrada: string;
    domingo_Salida: string;
    terminal_ID: number;
    limite_Llegada: number;
    limite_Salida: number;
}