import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../models/Product';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  @Input() prod:Product;
  @Output() productEmitter = new EventEmitter<Product>();

  constructor() {  }

  ngOnInit() {
  }

  onSubmit( event:any)
  {
    let name:string = event.target.name.value;
    this.productEmitter.emit(this.prod);
  }

  changedName(name:string)
  {
    this.prod.name = name;
  }

  changedDescription(desc:string)
  {
    this.prod.description = desc;
  }

  changedPrice( price:number)
  {
    this.prod.price = price;
  }

}
