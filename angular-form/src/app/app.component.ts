import { Component } from '@angular/core';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';

  public languages = ["html", "css", "js", "php"];

  public phoneCodes = ["+32", "+31", "+49"];

  friendModel = new Friend('', 'Joshi', 'shreejan1212@gmail.com', '', '0484905177', '');
}
