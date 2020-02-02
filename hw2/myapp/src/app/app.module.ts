import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserNameComponent } from './components/user-name/user-name.component';
import { UserEducationComponent } from './components/user-education/user-education.component';
import { UserSkillsComponent } from './components/user-skills/user-skills.component';
import { UserContactComponent } from './components/user-contact/user-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    UserEducationComponent,
    UserSkillsComponent,
    UserContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
