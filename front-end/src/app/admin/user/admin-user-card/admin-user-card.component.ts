import {Component, OnInit} from '@angular/core';
import {CreateProductComponent} from "../../product/create-product/create-product.component";
import {NgForOf} from "@angular/common";
import {User} from "../../../interfaces/user";
import {UserService} from "../../../services/user.service";
import {CreateUserComponent} from "../create-user/create-user.component";

@Component({
  selector: 'app-admin-user-card',
  standalone: true,
  imports: [
    CreateProductComponent,
    NgForOf,
    CreateUserComponent
  ],
  templateUrl: './admin-user-card.component.html',
  styleUrl: './admin-user-card.component.css'
})
export class AdminUserCardComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService) {
    this.userService.get_users().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnInit() {
  }

  onDeleteUser(id: number) {
    this.userService.del_user(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  onUserCreated(user: User) {
    this.users.push(user);
  }
}
