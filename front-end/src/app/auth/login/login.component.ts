import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  success_message: string = '';
  error_message: string = '';

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(response => {
      // Handle login success
      this.success_message = 'Login successful';
      this.error_message = '';
    }, error => {
      // Handle login error
      this.error_message = 'Login failed';
      this.success_message = '';
    });
  }

  register(): void {
    this.authService.register(this.username, this.password).subscribe(response => {
      // Handle register success
      this.success_message = 'Registration successful';
      this.error_message = '';
    }, (error: HttpErrorResponse) => {
      // Handle register error
      this.error_message = error.error.message;
      this.success_message = '';
    });
  }
}
