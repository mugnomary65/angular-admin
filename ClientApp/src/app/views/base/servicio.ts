import { ICliente } from './cliente';
import { IEstado } from 'app/my-dialog2/estado';
import { IDescription } from './description';

export interface IServicio{
    id: number;
    idServicio:string;
    formapagos: string;
    descripcions: IDescription[];  
    total: number;
    date: Date; 
    nota:string;
    clienteId: number;
    estadoId: number;
    clientes: ICliente;
    estados: IEstado;
    manobra: number;
    seisporciento: number;   
    subtotal: number;  
    tiosan: number;
    gastosNetos: number;
    ganancias: number;
    precioReal: number;
}