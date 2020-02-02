import { Component } from '@angular/core';

@Component({
  selector: 'app-user-education',
  templateUrl: './user-education.component.html',
  styleUrls: ['./user-education.component.css']
})
export class UserEducationComponent {
  education = 'Закінчила Чернівецький національний університет ім. Ю. Федьковича за спеціальністтю інформатика';
  courses = 'В даний момент проходжу курси в харківській IT-школі EasyCode за напрямком - "Front-End + Angular"'
}
