import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HomeComponent } from './home/home.component';
import { LogroComponent } from './logro/logro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogrosComponent } from './logros/logros.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    TruncatePipe,
    AppComponent,
    HomeComponent,
    LogroComponent,
    NavbarComponent,
    LogrosComponent,
    ItemComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
