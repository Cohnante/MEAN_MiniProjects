export class products{
  _id?: number;
  name: string;
  price: number;
  categoria: string;
  ubicacion: string;

  constructor(name:string, price:number,categoria:string,ubicacion:string){
    this.name = name;
    this.price = price;
    this.categoria = categoria;
    this.ubicacion = ubicacion;
  }
}