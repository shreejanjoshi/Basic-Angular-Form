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

  selctorHasError = true;

  friendModel = new Friend('Shreejan', 'Joshi', 'shreejan1212@gmail.com', 'default', '484905177', 'default');

  selector(value: string){
    if(value === 'default'){
      this.selctorHasError = true;
    }else{
      this.selctorHasError = false;
    }
  }
}
