export class products{
  _id?: string | undefined;

  Nombre: string ;
  Precio: number;
  Categoria: string;
  Ubicacion: string;
  constructor(Nombre:string, Precio:number,Categoria:string,Ubicacion:string){
    this.Nombre = Nombre;
    this.Precio= Precio;
    this.Categoria = Categoria;
    this.Ubicacion = Ubicacion;
  }
}