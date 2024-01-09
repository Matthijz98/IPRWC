import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from "../interfaces/product";
import {Injectable} from "@angular/core";
import {Subject, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService{
  private productCreatedSource = new Subject<Product>();
  productCreated$ = this.productCreatedSource.asObservable();

  constructor(private http: HttpClient,) { }

  get_products(){
    return this.http.get<Product[]>('http://localhost:8080/public/products/')
  }

  get_product(id: number){
    return this.http.get<Product>('http://localhost:8080/public/products/' + id)
  }

  create_product(title: string, description: string, price: number){
    const newProduct = { title: title, description: description, price: price };
    return this.http.post<Product>('http://localhost:8080/private/products', newProduct)
  }

  del_product(id: number){
    return this.http.delete<Product>('http://localhost:8080/api/products/' + id)
  }
}
