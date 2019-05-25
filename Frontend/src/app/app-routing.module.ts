import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "../app/app.component";
import { ProductAdderComponent } from "../app/components/product-adding/product-adder/product-adder.component"; 
import { ProductListerComponent } from "../app/components/product-listing/product-lister/product-lister.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ProductListerComponent},
  {path: 'add' , component: ProductAdderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
