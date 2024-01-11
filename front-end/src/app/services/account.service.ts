import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService{
  constructor(private http: HttpClient) { }

  get_address(){
    return this.http.get('http://localhost:8080/private/address')
  }
}
