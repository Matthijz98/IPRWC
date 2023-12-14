import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from "../interfaces/product";


export class ProductService{

  constructor(private http: HttpClient,) { }

  get_products(){
    return this.http.get<Product>('http://localhost:8080/api/products')
  }

}

