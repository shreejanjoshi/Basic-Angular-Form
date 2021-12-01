import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url = 'http://localhost:9100/addFriends';
  constructor(private http: HttpClient) { }

  addFriend(friend: Friend, url: string): Observable<any> {
    return this.http.post(url, friend);
  }

}
