import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//pages
import { HomeComponent } from './home/home.component';

//material
import { MaterialModule } from './material.module';

//pipes
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
