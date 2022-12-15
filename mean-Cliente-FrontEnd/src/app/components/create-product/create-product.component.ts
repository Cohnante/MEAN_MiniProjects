import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { products } from 'src/app/models/Products';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productoForm:FormGroup;

  constructor(private fb: FormBuilder, private router:Router) { 
    this.productoForm = this.fb.group({
      producto:['',Validators.required],
      categoria:['',Validators.required],
      ubicacion:['',Validators.required],
      precio:['',Validators.required]
    })
  }

  agregarProducto(){
    console.log(this.productoForm.get('producto')?.value);

    const Producto:products={
      Nombre:this.productoForm.get('producto')?.value,
      Categoria:this.productoForm.get('categoria')?.value,
      Ubicacion:this.productoForm.get('ubicacion')?.value,
      Precio:this.productoForm.get('precio')?.value
    }
    console.log(Producto);
    this.router.navigate([''])
  }
  ngOnInit(): void {
  }

}
