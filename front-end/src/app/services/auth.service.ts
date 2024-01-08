import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class AuthService{
  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    const newLogin = { login: username, password: password };
    return this.http.post('http://localhost:8080/login', newLogin)
  }

  register(username: string, password: string){
    const newRegister = { login: username, password: password };
    return this.http.post('http://localhost:8080/register', newRegister)
  }
}
