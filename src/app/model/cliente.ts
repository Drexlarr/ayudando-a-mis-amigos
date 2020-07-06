import { Producto } from './producto'
import { ClienteProducto } from './cliente-producto';
export class Cliente {
    id: number;
    nombre: string;
    productos: ClienteProducto[];
}
