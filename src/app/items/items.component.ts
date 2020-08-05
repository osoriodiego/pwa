import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database'; 

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit {


  title = 'items';
  description = 'firestore xample';
 
  itemValue = '';
  items: Observable<any[]>;
 
  constructor(
    public firestore: AngularFireDatabase) {
      
    this.items = firestore.list('items').valueChanges();
    console.log("DATA: ", this.items);
  }
 
  onSubmit() {
    this.firestore.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }

  ngOnInit() {
  }

}
