import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../../services/products/products-service.service';
import { Product } from '../../../../models/Product';

//this is a record object for holding the states in the view
export class DisplayableProduct
{
  constructor( prod:Product ) 
  {
    this.prod = prod;
  }
  prod:Product;
  inEditingState:boolean;
  inViewingState:boolean;
}

@Component({
  selector: 'app-product-lister',
  templateUrl: './product-lister.component.html',
  styleUrls: ['./product-lister.component.css']
})
export class ProductListerComponent implements OnInit {

  productsOnScreen: DisplayableProduct[];

  allProducts: Product[];
  
  constructor( private productsService : ProductsServiceService) 
  {
    productsService.getAllProducts().subscribe( x => 
      {
        this.allProducts = x;
        this.productsOnScreen = this.allProducts.map( x => new DisplayableProduct(x));
      });

  }

  ngOnInit()
  {
    
  }

  onSearchChange( searchValue: string ) 
  {  
    this.productsOnScreen = this.allProducts
                  .filter( x => 
                        x.name.toLowerCase().startsWith(searchValue.toLowerCase()))
                  .map( x => new DisplayableProduct(x));
  }

  onDeleteClick( product: Product )
  {
    console.log( "Deleting: " + product.name);
    this.allProducts = this.allProducts.filter( x => x.id !== product.id );
    this.productsOnScreen = this.productsOnScreen.filter( x => x.prod.id !== product.id );
    this.productsService.deleteProduct(product);
  }

  onUpdateClick( product: Product )
  {
    console.log( "Updating: " + product.name);

    for( let i=0 ;i < this.productsOnScreen.length;i++)
    {
      if( this.productsOnScreen[i].prod.id == product.id )
      {
        let newDisplayProd = new DisplayableProduct(product);
        newDisplayProd.inEditingState = true;
        this.productsOnScreen[i] = newDisplayProd;
        break;
      }
    }

  }

  onViewClick( product: Product )
  {
    console.log( "Viewing: " + product.name);

    // this is the pnly way I can force the view to re-render

    for( let i=0 ;i < this.productsOnScreen.length;i++)
    {
      if( this.productsOnScreen[i].prod.id == product.id )
      {
        let newDisplayProd = new DisplayableProduct(product);
        newDisplayProd.inViewingState = true;
        this.productsOnScreen[i] = newDisplayProd;
        break;
      }
    }
  }

  onUpdateProduct( newProd: Product)
  {

    for( let i=0;i<this.productsOnScreen.length;i++)
    {
      if( this.productsOnScreen[i].prod.id == newProd.id )
      {
        this.productsOnScreen[i] = new DisplayableProduct(newProd);
        break;
      }
    }

    this.productsService.updateProduct( newProd ).subscribe();
  }
}
