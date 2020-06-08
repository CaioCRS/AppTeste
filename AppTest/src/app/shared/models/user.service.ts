import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserModel {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
