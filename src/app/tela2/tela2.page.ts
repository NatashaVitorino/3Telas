import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
})
export class Tela2Page implements OnInit {

  nomeAutor: string;
  nomeLivro: string;
  numPaginas: string;
  dataLancamento: string;
  avalLivro: string;
  avalLivroEsc: string;

  nomeAutor2: string;
  nomeLivro2: string;
  numPaginas2: number;
  dataLancamento2: Date;
  avalLivro2: number;
  avalLivroEsc2: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    public toastController: ToastController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.nomeAutor = this.activatedRoute.snapshot.paramMap.get('nomeAutor');
    this.nomeLivro = this.activatedRoute.snapshot.paramMap.get('nomeLivro');
    this.numPaginas = this.activatedRoute.snapshot.paramMap.get('numPaginas');
    this.dataLancamento = this.activatedRoute.snapshot.paramMap.get('dataLancamento');
    this.avalLivro = this.activatedRoute.snapshot.paramMap.get('avalLivro');
    this.avalLivroEsc = this.activatedRoute.snapshot.paramMap.get('avalLivroEsc');
  }

  avancarTela(){
    this.router.navigateByUrl('/tela3');
  }

  manterTela(){
    this.router.navigateByUrl('/tela2')
  }

  retornarTela(){
    this.router.navigateByUrl('/home');
  }

  confirmar( nomeAutor2: string,
    nomeLivro2: string,
    numPaginas2: number,
    dataLancamento2: Date,
    avalLivro2: number,
    avalLivroEsc2: string){
    // eslint-disable-next-line max-len
    this.router.navigateByUrl(`/tela2/${this.nomeAutor2}/${this.nomeLivro2}/${this.numPaginas2}/${this.dataLancamento2}/${this.avalLivro2}/${this.avalLivroEsc2}`);
  }

  async editar() {

    const alert = await this.alertController.create({
      header: 'Inserção de Dados',
      inputs: [
        {
          name: 'inputNomeAutor',
          type: 'text',
          placeholder: this.nomeAutor
        },{
          name: 'inputNomeLivro',
          type: 'text',
          placeholder: this.nomeLivro
        },{
          name: 'inputNumPaginas',
          type: 'number',
          placeholder: this.numPaginas,
          min: 0
        },{
          name: 'inputDataLancamento',
          type: 'date',
          placeholder: this.dataLancamento,
          max: '2022-05-31'
        },{
          name: 'inputAvalLivro',
          type: 'number',
          placeholder: this.avalLivro,
          min: 0,
          max: 5
        },{
          name: 'inputAvalLivroEsc',
          type: 'textarea',
          placeholder: this.avalLivroEsc
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
            this.manterTela();
          }
        },{
          text: 'Confirmar',
          handler: (dado: any) => {
            this.nomeAutor2 = dado.inputNomeAutor;
            this.nomeLivro2 = dado.inputNomeLivro;
            this.numPaginas2 = dado.inputNumPaginas;
            this.dataLancamento2 = dado.inputDataLancamento;
            this.avalLivro2 = dado.inputAvalLivro;
            this.avalLivroEsc2 = dado.inputAvalLivroEsc;
            this.confirmar(this.nomeAutor2,
              this.nomeLivro2,
              this.numPaginas2,
              this.dataLancamento2,
              this.avalLivro2,
              this.avalLivroEsc2);
        }
      }
    ]
  });
  await alert.present();
}}
