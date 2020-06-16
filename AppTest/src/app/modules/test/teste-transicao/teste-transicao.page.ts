import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from '@ionic/angular'
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-teste-transicao',
  templateUrl: './teste-transicao.page.html',
  styleUrls: ['./teste-transicao.page.scss'],
})
export class TesteTransicaoPage implements OnInit {
  value: any;
  selectCliente: any;
  inputNome: string = "";
  inputSenha: string = "";
  profissionalExistente: boolean = false;
  constructor(private route: ActivatedRoute,
              public alertCtrl: AlertController) { }

  ngOnInit() {
    this.value = this.route.snapshot.paramMap.get("item");

    if (this.value != 0){
      //Busca o profissional no banco de dados
      this.inputNome = "Joãozinho";
      this.profissionalExistente = true;
    }else{
      //Deixa os campos de nome e senha em branco para um novo login
      this.profissionalExistente = false;
    }
  }

  async ClienteSelecionado(){
    const alert = await this.alertCtrl.create({
      message: this.selectCliente,
      subHeader: 'Teste!',
      buttons: ['Ok']
      });
    await alert.present();
  }
}
