import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
