import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(){
    return !!localStorage.getItem('jwtToken');
  }

  login(username: string, password: string){
    const newLogin = { login: username, password: password };
    return this.http.post<{token: string}>( `${environment.apiUrl}/login`, newLogin).pipe(
      tap((res) => {
        localStorage.setItem('jwtToken', res.token);
        // After successful login, redirect to the stored URL
        const redirectUrl = localStorage.getItem('redirectUrl');
        if (redirectUrl) {
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
        } else {
          // If there's no stored URL, redirect to a default page
          this.router.navigate(['/']);
        }
      })
    );
  }

  register(username: string, password: string){
    const newRegister = { login: username, password: password };
    return this.http.post(`${environment.apiUrl}/register`, newRegister)
  }
}
