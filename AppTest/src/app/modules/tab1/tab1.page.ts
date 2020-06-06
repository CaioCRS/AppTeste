import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../core/http/user.service';
import { User } from './../../shared/models/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public alertCtrl: AlertController, public userService: UserService) {}

  async RequestApi() {

    this.userService.getUser().subscribe(async (user : User) => {
      const alert = await this.alertCtrl.create({
        message: user.title,
        subHeader: 'Hello!',
        buttons: ['Ok']
       });
      await alert.present();
    });
  }
}
