import { Component} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {Router, RouterOutlet} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login-required',
  standalone: true,
  imports: [
    LoginComponent,
    RouterOutlet,
    CommonModule,
  ],
  templateUrl: './login-required.component.html',
  styleUrl: './login-required.component.css'
})
export class LoginRequiredComponent {
  constructor(public authService: AuthService) { }
}
