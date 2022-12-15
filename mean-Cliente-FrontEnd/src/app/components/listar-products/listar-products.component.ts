import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/models/Products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-listar-products',
  templateUrl: './listar-products.component.html',
  styleUrls: ['./listar-products.component.css']
})
export class ListarProductsComponent implements OnInit {


  list:products[]=[]
  constructor(private Product:ProductsService) {
    
   }

  ngOnInit(): void {this.obtenerProductos()
  }

  obtenerProductos(){
   this.Product.getProducts().subscribe(data=>{
    console.log(data);
    this.list = data;
   }),console.error();
  }
  eliminar(id:any){
    this.Product.deleteProducts(id).subscribe(data=>{
      alert("Producto Eliminado");
      this.obtenerProductos();
    }),console.error();
    
    
    
  }

}
