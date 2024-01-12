import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Address} from "../interfaces/address";

@Injectable({
  providedIn: 'root',
})
export class AddressService{
  constructor(private http: HttpClient,) { }

  get_addresses(){
    return this.http.get<Address[]>(`${environment.apiUrl}/private/addresses/`)
  }

  get_address(id: number){
    return this.http.get<Address>(`${environment.apiUrl}/private/addresses/` + id)
  }

  get_addresses_by_user(id: number){
    return this.http.get<Address[]>(`${environment.apiUrl}/private/users/` + id + `/address/`)
  }

  create_address(address: any){
    return this.http.post<Address>(`${environment.apiUrl}/private/addresses`, address);
  }
}
