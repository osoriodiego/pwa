import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogroComponent } from './logro/logro.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { LogrosComponent } from './logros/logros.component';


const routes: Routes = [
  { path: 'logros', component: LogrosComponent },
  { path: 'logro/:id', component: LogroComponent },

  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
