import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService{
  constructor(private http: HttpClient) { }

  get_address(){
    return this.http.get(`${environment.apiUrl}/private/address`)
  }
}
