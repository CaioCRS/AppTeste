import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../../shared/models/user.service'

@Injectable({
  providedIn: 'root'
})
export class UserHttp {
  constructor(private httpClient: HttpClient) { }

  public getUser(): Observable<UserModel> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').pipe(map(response => {
      return new UserModel(response);
    }));
  }
}
