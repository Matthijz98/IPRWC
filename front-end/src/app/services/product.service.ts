import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from "../interfaces/product";
import {Injectable} from "@angular/core";
import {Subject} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ProductService{
  private productCreatedSource = new Subject<Product>();
  productCreated$ = this.productCreatedSource.asObservable();

  constructor(private http: HttpClient,) { }

  get_products(){
    return this.http.get<Product[]>(`${environment.apiUrl}/public/products/`)
  }

  get_product(id: number){
    return this.http.get<Product>(`${environment.apiUrl}/public/products/` + id)
  }

  create_product(title: string, description: string, price: number){
    const newProduct = { title: title, description: description, price: price };
    return this.http.post<Product>(`${environment.apiUrl}/private/products`, newProduct)
  }

  del_product(id: number){
    return this.http.delete<Product>(`${environment.apiUrl}/private/products/` + id)
  }
}
