import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root',
})
export class UserService{
  constructor(private http: HttpClient,) { }

  get_users(){
    return this.http.get<User[]>(`${environment.apiUrl}/private/users/`)
  }

  get_user(id: number){
    return this.http.get<User>(`${environment.apiUrl}/private/users/` + id)
  }

  create_user(login: string, password: string, role: string){
    const newUser = { login: login, password: password, role: role };
    return this.http.post<User>(`${environment.apiUrl}/private/users`, newUser)
  }

  del_user(id: number){
    return this.http.delete<User>(`${environment.apiUrl}/private/users/` + id)
  }
}
