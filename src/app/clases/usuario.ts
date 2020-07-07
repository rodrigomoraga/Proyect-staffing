export class Usuario{
    id: number;
    rol: string;
    user: string;
    password: string;
    nombre: string;
    habilidades: string[];
    //usuario trabajando en la empresa
    activo: boolean;
    //usuario trabajando en algun proyecto
    estado: boolean;
}