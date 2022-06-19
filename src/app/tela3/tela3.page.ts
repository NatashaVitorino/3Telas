import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tela3',
  templateUrl: './tela3.page.html',
  styleUrls: ['./tela3.page.scss'],
})
export class Tela3Page implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {}

  retornarTela(){
    this.router.navigateByUrl('/home');
  }
}
