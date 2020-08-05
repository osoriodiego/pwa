import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database'; 
import { ILogro, LogrosService } from '../services/logros.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styles: []
})
export class LogrosComponent implements OnInit {

  logros: ILogro[];

  constructor(private logrosService: LogrosService) { }

  ngOnInit() {
    this.logros = this.logrosService.all();
  }

}
