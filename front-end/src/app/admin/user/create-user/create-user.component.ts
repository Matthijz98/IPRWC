import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {User} from "../../../interfaces/user";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  login: string = '';
  password: string = '';
  role: string = 'user';

  @Output() userCreated = new EventEmitter<User>();

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.create_user(this.login, this.password, this.role).subscribe((user) => {
      console.log('User created', user);
      this.login = '';
      this.password = '';
      this.userCreated.emit(user);
    });
  }
}
