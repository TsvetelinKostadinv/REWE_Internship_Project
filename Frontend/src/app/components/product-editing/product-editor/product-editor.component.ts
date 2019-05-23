import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/Product';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  @Input() prod:Product;

  constructor() { }

  ngOnInit() {
  }

}
