import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { UserHttp } from '../../core/http/user.service';
import { UserModel } from './../../shared/models/user.service';
import { UserService } from './../../shared/services/user.service';
import { TesteTransicaoPage } from '../test/teste-transicao/teste-transicao.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  inputIdProfissional: number = 0;

  constructor(public alertCtrl: AlertController,
    public userHttp: UserHttp,
    private userService: UserService,
    public navCtrl: NavController,
    private router: Router) { }

  async RequestApi() {

    try {
      this.userHttp.getUser().subscribe(async (user : UserModel) => {

        let insertedUser = await this.userService.insert(user);

        if (insertedUser && insertedUser.insertId > 0){
          const user = await this.userService.getById(insertedUser.insertId);

          if (user){
            const alert = await this.alertCtrl.create({
              message: `${insertedUser.insertId} ${user.title}`,
              subHeader: 'Hello!',
              buttons: ['Ok']
             });
            await alert.present();
          } 
        }
      });
    } catch (error) {
      const alert = await this.alertCtrl.create({
        message: error,
        subHeader: 'Hello!',
        buttons: ['Ok']
        });
      await alert.present();
    }
  }

  AbrirOutraPagina(){
    this.router.navigate(['teste-transicao', {item: this.inputIdProfissional}]);
  }
}

