import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
import { NgForm } from '@angular/forms';

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

  friendModel = new Friend(' ', ' ', ' ', 'default', ' ', 'default');

  constructor(private addFriends: AddFriendService) { }

  selector(value: string) {
    if (value === 'default') {
      this.selctorHasError = true;
    } else {
      this.selctorHasError = false;
    }
  }

  // onSubmit(form: NgForm){
  //   this._addFriend.addFriend(this.friendModel)
  //   .subscribe(
  //     data => console.log('it worked', data),
  //     error => console.log("it didn't work", error)
  //   )
  // }

  onSubmit(formName: NgForm) {
    //  console.log(form);
    this.addFriends.addFriend(this.friendModel, this.addFriends.url)
      .subscribe((friend: Friend) => console.log('it worked'),
        error => console.log("it didn't work", error)
      )
  }

  ngOnInit(): void{
    this.showFriends();
  }

  allFriend: any
  async showFriends(): Promise<void> {
    let apiFriends = await fetch("http://localhost:9100/allFriends", {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    this.allFriend = await apiFriends.json();
  }
}
