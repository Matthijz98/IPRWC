import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";


@Injectable({
  providedIn: 'root',
})
export class UserService{
  constructor(private http: HttpClient,) { }

  get_users(){
    return this.http.get<User[]>('http://localhost:8080/private/users/')
  }

  get_user(id: number){
    return this.http.get<User>('http://localhost:8080/private/users/' + id)
  }

  create_user(login: string, password: string, role: string){
    const newUser = { login: login, password: password, role: role };
    return this.http.post<User>('http://localhost:8080/private/users', newUser)
  }

  del_user(id: number){
    return this.http.delete<User>('http://localhost:8080/private/users/' + id)
  }
}
