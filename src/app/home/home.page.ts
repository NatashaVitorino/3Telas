import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nomeAutor: string;
  nomeLivro: string;
  numPaginas: number;
  dataLancamento: Date;
  avalLivro: number;
  avalLivroEsc: string;


  constructor(public toastController: ToastController,
    public alertController: AlertController, private router: Router) {}

    abrirTela(nomeAutor: string,
      nomeLivro: string,
      numPaginas: number,
      dataLancamento: Date,
      avalLivro: number,
      avalLivroEsc: string){
      // eslint-disable-next-line max-len
      this.router.navigateByUrl(`/tela2/${this.nomeAutor}/${this.nomeLivro}/${this.numPaginas}/${this.dataLancamento}/${this.avalLivro}/${this.avalLivroEsc}`);
    }
    retornarTela(){
      this.router.navigateByUrl('/home');
    }

    async inserirDados(){

    const alert = await this.alertController.create({
      header: 'Inserção de Dados',
      inputs: [
        {
          name: 'inputNomeAutor',
          type: 'text',
          placeholder: 'Insira o nome do Autor'
        },{
          name: 'inputNomeLivro',
          type: 'text',
          placeholder: 'Insira o nome do Livro'
        },{
          name: 'inputNumPaginas',
          type: 'number',
          placeholder: 'Insira a quantidade de páginas',
          min: 0
        },{
          name: 'inputDataLancamento',
          type: 'date',
          placeholder: 'Insira a data de lançamento',
          max: '2022-05-31'
        },{
          name: 'inputAvalLivro',
          type: 'number',
          placeholder: 'Insira sua nota',
          min: 0,
          max: 5
        },{
          name: 'inputAvalLivroEsc',
          type: 'textarea',
          placeholder: 'Breve avaliação para o Livro'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
            this.retornarTela();
          }
        },{
          text: 'Confirmar',
          handler: (dado: any) => {
            this.nomeAutor = dado.inputNomeAutor;
            this.nomeLivro = dado.inputNomeLivro;
            this.numPaginas = dado.inputNumPaginas;
            this.dataLancamento = dado.inputDataLancamento;
            this.avalLivro = dado.inputAvalLivro;
            this.avalLivroEsc = dado.inputAvalLivroEsc;
            this.abrirTela(this.nomeAutor,
              this.nomeLivro,
              this.numPaginas,
              this.dataLancamento,
              this.avalLivro,
              this.avalLivroEsc);
          }
        }
      ]
    });
    await alert.present();
  }
}
