import { Component } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {
  photoURL = 'assets/user-photo.jpg';
  userName = 'Соколович Анна Дмитрівна'
}
