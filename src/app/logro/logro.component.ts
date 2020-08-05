import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogrosService, ILogro } from '../services/logros.service';

@Component({
  selector: 'app-logro',
  templateUrl: './logro.component.html',
  styles: []
})
export class LogroComponent implements OnInit {


  logro: ILogro;

  constructor(
    private logrosService: LogrosService,
    private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.logro = this.logrosService.find(params['id']);
      console.log("Logro: ", this.logro);
    })
  }

  shared(id:number){
    console.log("Shared post ", id);
  }

}
