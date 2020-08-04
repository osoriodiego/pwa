import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//material
import { MaterialModule } from './material.module';

//pipes
import { TruncatePipe } from './pipes/truncate.pipe';

//services
import { LogrosService } from './services/logros.service';

//pages
import { HomeComponent } from './home/home.component';
import { LogroComponent } from './logro/logro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe,
    LogroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,

    MaterialModule
  ],
  providers: [LogrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
