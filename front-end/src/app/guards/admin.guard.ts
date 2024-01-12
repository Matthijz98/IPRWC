import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import {AuthService} from "../services/auth.service";

interface DecodedToken {
  role: string;
  // include other properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Store the attempted URL for redirecting
    localStorage.setItem('redirectUrl', route.url.join('/'));

    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      if (decodedToken.role === 'admin') {
        return true;
      }
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
