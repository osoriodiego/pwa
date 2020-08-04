import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogroComponent } from './logro/logro.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: LogroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
