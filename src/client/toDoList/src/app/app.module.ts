import { BrowserModule } from '@angular/platform-browser';

import { userService } from '../../services/userService';
import { itemService } from '../../services/itemService'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home/:id',
    component: HomeComponent
  },
  {
    path: 'home/createItem/:id',
    component: ItemsComponent
  }
 ]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ItemsComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  exports: [RouterModule],
  providers: [ userService, itemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
