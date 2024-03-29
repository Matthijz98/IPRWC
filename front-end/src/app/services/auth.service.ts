import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {environment} from "../../environments/environment";
import {jwtDecode} from "jwt-decode";

interface DecodedToken {
  id: number;
  role: string;
  // include other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(){
    return !!localStorage.getItem('jwtToken');
  }

  logout(){
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/']);
  }

  login(username: string, password: string){
    const newLogin = { login: username, password: password };
    return this.http.post<{token: string}>( `${environment.apiUrl}/login`, newLogin).pipe(
      tap(response => {
        localStorage.setItem('jwtToken', response.token);
        const redirectUrl = localStorage.getItem('redirectUrl') || '/';
        localStorage.removeItem('redirectUrl');

        this.router.navigate([redirectUrl]);

      })
    );
  }

  register(username: string, password: string){
    const newRegister = { login: username, password: password };
    return this.http.post<{token: string}>(`${environment.apiUrl}/register`, newRegister).pipe(
      tap(response => {
        localStorage.setItem('jwtToken', response.token);
        const redirectUrl = localStorage.getItem('redirectUrl') || '/';
        console.log(redirectUrl)
        localStorage.removeItem('redirectUrl');

        this.router.navigate([redirectUrl]).catch(error => {
          console.error('Navigation error:', error); // Add this line to catch any navigation errors
        });
      })
    );
  }

  isAdmin() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      return decodedToken.role === 'admin';
    }
    else {
      return false;
    }

  }

  getUserId() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      console.log(decodedToken)
      return decodedToken.id;
    }else {
      return undefined;
    }
  }
}
