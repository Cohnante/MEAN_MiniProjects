import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListarProductsComponent } from './components/listar-products/listar-products.component';

const routes: Routes = [
  {path:'',component:ListarProductsComponent, redirectTo:'full'},
  {path: 'Products/create', component:CreateProductComponent},
  {path: 'Products/Editar:id', component:ListarProductsComponent},
  {path:'**',component:ListarProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
