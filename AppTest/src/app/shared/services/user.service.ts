import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/core/database/database.service';
import { UserModel } from '../models/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: DatabaseService) { }

  insert(user: UserModel){
    const sql = 'insert into user (userId, title, completed) values (?,?,?)';
    const data = [user.userId, user.title, user.completed];
    return this.db.executeSQL(sql, data);
  }

  async getById(id: number){
    const sql = 'select * from user where id = ?'
    const data = [id];
    const result = await this.db.executeSQL(sql, data);
    const rows = result.rows;
    const user = new UserModel();
    if (rows && rows.length > 0){
      const item = rows.item(0);
      user.id = item.id;
      user.userId = item.userId;
      user.title = item.title;
      user.completed = item.completed;
    }
    return user;
  }

  async getAll(){
    const sql = 'select * from user';
    const result = await this.db.executeSQL(sql);
    const user = this.fillUsers(result.rows);
    return user;
  }

  private fillUsers(rows: any){
    const users: UserModel[] = [];
    for (let index = 0; index < rows.length; index++) {
      const item = rows.item(index);
      const user = new UserModel();
      user.id = item.id;
      user.userId = item.userId;
      user.title = item.title;
      user.completed = item.completed;
      users.push(user);
    }
    return users;
  }
}
