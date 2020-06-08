import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName: string = 'test.db';
  constructor(private sqLite: SQLite, private sqLitePorter: SQLitePorter) { }

  async openDatabase(){
    try {
      this.db = await this.sqLite.create({ name: this.databaseName, location: 'default' });
      await this.createDatabase();
    } catch (error) {
      console.error('Ocorreu um erro ao criar o banco de dados', error);
    }
  }

  async createDatabase(){
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqLitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
  }

  getCreateTable(){
    const sqls = [];
    sqls.push(`CREATE TABLE IF NOT EXISTS user (id integer primary key AUTOINCREMENT, 
                                                userId integer, 
                                                title varchar(100), 
                                                completed boolean)`);
    return sqls.join('\n');
  }

  executeSQL(sql: string, params?: any[]){
    return this.db.executeSql(sql, params);
  }
}
