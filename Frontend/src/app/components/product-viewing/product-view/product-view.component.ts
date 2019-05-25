import { Component, OnInit , Input } from '@angular/core';
import { Product } from '../../../../models/Product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() prod:Product;

  constructor() { }

  ngOnInit() {
  }

}
