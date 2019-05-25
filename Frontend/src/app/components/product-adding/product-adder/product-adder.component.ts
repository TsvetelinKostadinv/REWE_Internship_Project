import { Component, OnInit } from '@angular/core';

import { ProductsServiceService } from "../../../services/products/products-service.service";
import { Product } from "../../../../models/Product";

@Component({
  selector: 'app-product-adder',
  templateUrl: './product-adder.component.html',
  styleUrls: ['./product-adder.component.css']
})
export class ProductAdderComponent implements OnInit {

  private name:string;
  private desc:string;
  private price:number;

  constructor( private productService:ProductsServiceService ) { }

  ngOnInit() {
  }

  onNameChange( name: string )
  {
    this.name = name;
  }

  onDescriptionChange( desc: string )
  {
    this.desc = desc;
  }

  onPriceChange( price: number )
  {
    this.price = price;
  }

  addProduct()
  {
    let prod = new Product();
    prod.name = this.name;
    prod.description = this.desc;
    prod.price = this.price;
    console.log("Creating");
    this.productService.createProduct( prod ).subscribe();
  }

}
