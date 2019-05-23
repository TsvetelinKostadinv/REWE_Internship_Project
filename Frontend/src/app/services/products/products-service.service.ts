import { Injectable } from '@angular/core';
import { Product } from "../../../models/Product";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const backendUrl:string = 'http://localhost:8080/products/';

const allSuffix:string = 'all';
const updateSuffix:string = 'update';
const deleteSuffix:string = 'delete';
const addSuffix:string = "add";


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor ( private http:HttpClient ) { }

  getAllProducts() : Observable<Product[]>
  {
    return this.http.get<Product[]>(backendUrl + allSuffix);
  }

  updateProduct( product : Product ) : Observable<any>
  {
    let url = backendUrl+updateSuffix + "/" + product.id + "?name=" + product.name + "&description=" + product.description + "&price=" + product.price;
    return this.http.post(url, product);
  }

  deleteProduct( product : Product )
  {
    this.http.delete( backendUrl + deleteSuffix + "/" + product.id ).subscribe();
  }

  createProduct( product : Product ) : Observable<Product>
  {
    return this.http.post<Product>( backendUrl + addSuffix , product );
  }

}
