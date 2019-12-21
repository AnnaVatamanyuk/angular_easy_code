import { Component } from '@angular/core';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.css']
})
export class UserSkillsComponent{
 skills: Array<string> = [
   'HTML5,CSS3, SCSS',
   'Javascript,jQuery',
   'Photoshop',
   'Gulp',
   'Кроссбраузерна верстка',
   'Адаптивна верстка',
   'Pixel Perfect',
   'Git'
 ]
}
